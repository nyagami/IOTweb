import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export interface DeviceStatus { 
    name: string,
    status: string,
    time: string,
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