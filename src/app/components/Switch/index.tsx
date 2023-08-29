import { MD3ThemeType } from "@/app/theme/types"
import { Switch, SwitchProps } from "@nextui-org/react"

interface SwitchItemProps extends SwitchProps{
    theme: MD3ThemeType,
    label?: string,
}

const SwitchItem: React.FC<SwitchItemProps> = ({
    theme,
    label,
    ...props
}) => {
    return (
        <Switch
            {...props}
        >
            {
            label 
            ? <p className={"font-bold " + theme.name}>{label}</p>
            : null
            }
            {props.children}
        </Switch>
    )
}

export default SwitchItem