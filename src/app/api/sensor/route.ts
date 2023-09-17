import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import SensorData from "@/app/history/sensor/page";

const prisma = new PrismaClient();

export interface SensorData { 
    temperature: number,
    humidity: number,
    light: number,
    time: string,
}


export async function GET(req: NextRequest) {
    const num = Number(req.nextUrl.searchParams.get("num"));
    if(!num){
        const latest = await prisma.sensorStatus.findFirst({
            orderBy: {
                time: 'desc'
            }
        });
        return NextResponse.json(latest);
    }else{
        const data = await prisma.sensorStatus.findMany({
            orderBy: {
                time: 'desc'
            },
            take: num,
        });
        return NextResponse.json(data)
    }
}
