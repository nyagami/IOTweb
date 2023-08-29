"use client"
import { useEffect, useState } from "react"

export const useDemension = () => {
    const [{height, width}, setWindow] = useState({height: window.innerHeight, width: window.innerWidth});

    useEffect(() => {
        const handleChange = () => {
            setWindow({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener("resize", handleChange);
        return () => window.removeEventListener("resize", handleChange);
    }) 
    return {
        height,
        width
    };
}