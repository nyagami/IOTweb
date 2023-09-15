import { NextRequest, NextResponse } from "next/server";
import { getRandom } from "@/app/utils/getRandom";
import dayjs from "dayjs";

export interface SensorData { 
    temperature: number,
    humidity: number,
    light: number,
    time: string,
}

const getData = (): SensorData => {
    return {
        temperature: getRandom(-10, 70),
        humidity: getRandom(30, 100),
        light: getRandom(0, 100),
        time: dayjs().format('HH:mm:ss'),
    }
}

let initData: SensorData[] = [];
for(let i = 0; i < 10; i++) {
    initData.push(getData());
}
export async function GET(req: NextRequest) {
    initData = initData.slice(1);
    initData.push(getData());
    return NextResponse.json({
        data: initData,
    })
}
