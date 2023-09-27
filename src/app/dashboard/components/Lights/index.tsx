import styles from './Light.module.css'
import { useState } from "react"
import SwitchItem from "@/app/components/Switch"
import { ThemeType } from "@/app/theme/types"

interface LightItemProps {
    theme: ThemeType,
    icon: string,
    active: boolean,
    type: string,
}

const LightItem = ({
    theme,
    icon,
    active,
    type
}: LightItemProps
) => {

    return (
        <div className="h-28 w-36 md:h-64 md:w-5/6 bg-primary-300 pt-4 px-4 m-8 rounded-2xl">
            <SwitchItem
                theme={theme}
                color="success"
                size="lg"
                isSelected={active}
                onValueChange={async (isSelected) => {
                    await fetch("/api/action/request", {
                        method: "POST",
                        body: JSON.stringify({
                            type: type,
                            status: Number(isSelected)
                        })
                    })
                }}
            />
            <div className="flex w-full justify-center">
                <span 
                    className={"material-icons " + styles.lightItem + (status ? " text-white": "")}
                >
                    {icon}
                </span>
            </div>
        </div>
    )
}

export default LightItem