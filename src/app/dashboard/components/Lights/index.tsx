import SwitchItem from "@/app/components/Switch"
import { ThemeType } from "@/app/theme/types"

interface LightItemProps {
    theme: ThemeType
}

const LightItem = ({
    theme
}: LightItemProps
) => {

    return (
        <div className="h-24 w-32 bg-primary-300 pt-4 pl-4 m-4 rounded-2xl">
            <SwitchItem
                theme={theme}
                color="secondary"
            />
        </div>
    )
}

export default LightItem