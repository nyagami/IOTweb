import styles from './Light.module.css'
import SwitchItem from "@/app/components/Switch"
import { ThemeType } from "@/app/theme/types"

interface LightItemProps {
    theme: ThemeType,
    icon: string,
    active: boolean,
    type: string,
    alert: boolean
}

const LightItem = ({
    theme,
    icon,
    active,
    type,
    alert
}: LightItemProps
) => {
    return (
        <div className={"h-28 w-36 md:h-64 md:w-5/6 bg-primary-300 pt-4 px-4 m-8 rounded-2xl " + (alert ? styles.alert : "")}>
            <SwitchItem
                theme={theme}
                color="success"
                size="lg"
                defaultSelected={Boolean(active)}
                onValueChange={(isSelected) => {
                    fetch("/api/action/request", {
                        method: "POST",
                        body: JSON.stringify({
                            type: type,
                            status: Number(isSelected)
                        })
                    });
                }}
            />
            <div className="flex w-full justify-center "  >
                <span 
                    className={"material-icons " + styles.lightItem + (active ? " text-white": "")}
                >
                    {icon}
                </span>
            </div>
        </div>
    )
}

export default LightItem