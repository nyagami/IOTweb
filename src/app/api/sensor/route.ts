import { NextRequest, NextResponse } from "next/server";
import { PrismaClient} from "@prisma/client";
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
    const key = req.nextUrl.searchParams.get("key");
    if(!num){
        const latest = await prisma.sensorStatus.findFirst({
            orderBy: {
                time: 'desc'
            }
        });
        return NextResponse.json(latest);
    }else{
        const keyNum = parseInt(key || '');
        const filter = keyNum ? {
            OR: [
                {id: {equals: keyNum}},
                {temperature: {equals: keyNum}},
                {humidity: {equals: keyNum}},
                {light: {equals: keyNum}},
            ], 
        } : {}
        const data = await prisma.sensorStatus.findMany({
            where: {
                ...filter,
            },
            orderBy: {
                time: 'desc'
            },
            take: num,
        });
        return NextResponse.json(data)
    }
}
