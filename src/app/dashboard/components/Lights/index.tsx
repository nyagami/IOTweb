import styles from './Light.module.css'
import { useState } from "react"
import SwitchItem from "@/app/components/Switch"
import { ThemeType } from "@/app/theme/types"

interface LightItemProps {
    theme: ThemeType,
    icon: string,
    active: boolean
}

const LightItem = ({
    theme,
    icon,
    active = false,
}: LightItemProps
) => {
    const [status, setStatus] = useState(active);
    return (
        <div className="h-28 w-36 md:h-64 md:w-5/6 bg-primary-300 pt-4 px-4 m-8 rounded-2xl">
            <SwitchItem
                theme={theme}
                color="success"
                size="lg"
                isSelected={status}
                onValueChange={(isSelected) => {
                    setStatus(isSelected);
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