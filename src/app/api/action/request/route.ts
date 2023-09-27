import { NextRequest, NextResponse } from "next/server";
import * as mqtt from 'mqtt'

export interface DeviceStatus { 
    name: string,
    status: string,
    time: string,
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const client = mqtt.connect("mqtt://localhost:1883");
    client.publish("device_request", JSON.stringify(body));
    return NextResponse.json({});
}