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
        <div className="h-28 w-36 md:h-64 md:w-5/6 bg-primary-300 pt-4 pl-4 m-8 rounded-2xl">
            <SwitchItem
                theme={theme}
                color="secondary"
            />
        </div>
    )
}

export default LightItem