import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as mqtt from 'mqtt'

const prisma = new PrismaClient();
export interface DeviceStatus { 
    name: string,
    status: string,
    time: string,
}

export async function POST(req: NextRequest) {
    const client = mqtt.connect("mqtt://localhost:1883");
    client.publish("actio-request", "current");
    return NextResponse.json({});
}

export async function GET(req: NextRequest) {
    const num = Number(req.nextUrl.searchParams.get("num")) || 10;
    const data = await prisma.sensorStatus.findMany({
        orderBy: {
            time: 'desc'
        },
        take: num,
    });
    return NextResponse.json(data);
}