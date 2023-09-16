import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'
import SensorData from "@/app/history/sensor/page";

dayjs.extend(utc)
dayjs.extend(tz)

const prisma = new PrismaClient();

export interface SensorData { 
    temperature: number,
    humidity: number,
    light: number,
    time: string,
}

const parseUTC = (time: Date | undefined): string => {
    return dayjs.utc(time).format("YYYY-MM-DD HH:mm:ss");
} 

export async function GET(req: NextRequest) {
    const num = Number(req.nextUrl.searchParams.get("num"));
    if(!num){
        const latest = await prisma.sensorStatus.findFirst({
            orderBy: {
                time: 'desc'
            }
        });
        return NextResponse.json({
            ...latest,
            time: parseUTC(latest?.time)
        });
    }else{
        const data = await prisma.sensorStatus.findMany({
            orderBy: {
                time: 'desc'
            },
            take: num,
        });
        return NextResponse.json(
            data.map(sd => {
                return {
                    ...sd,
                    time: parseUTC(sd.time)
                }
            })
        )
    }
}
