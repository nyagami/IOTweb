const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const { Server } = require('socket.io')
const { PrismaClient } = require('@prisma/client')
const dayjs = require('dayjs')
const utc  = require('dayjs/plugin/utc')
const mqtt = require('mqtt');

const prisma = new PrismaClient();
dayjs.extend(utc)
 
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  const server = 
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true) 
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
  server
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    });

  const io = new Server(server);

  const mqttClient = mqtt.connect("mqtt://localhost:1883");
  mqttClient.on("message", async (topic, payload) => {
    let data = {};
    try{
      data = JSON.parse(payload.toString());
    }catch (e) {
      console.log("wrong message format")
    }
    if(!data) return;
    if(topic === "sensor"){
      if(data.temperature && data.humidity && data.light){
        const now = new Date(dayjs().utc(true).toISOString());
        const savedData = await prisma.sensorStatus.create({
          data: {
            ...data,
            time: now
          }
        });
        io.emit("sensor", savedData);
      }
    }else if(topic === "device"){
      // io.emit("action", data);
    }else{
      console.log("unknown topic", topic);
    }
  })
  mqttClient.on("error", (error) => {
    console.log(error);
  })
})