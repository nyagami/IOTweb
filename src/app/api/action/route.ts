import { getRandom } from "@/app/utils/getRandom";
import { NextRequest, NextResponse } from "next/server";

export interface DeviceStatus { 
    light: boolean,
    fan: boolean,
}

export async function GET(req: NextRequest) {
    return NextResponse.json({
        light: Boolean(getRandom(0, 3)),
        fan: Boolean(getRandom(0, 3))
    } as DeviceStatus)
}