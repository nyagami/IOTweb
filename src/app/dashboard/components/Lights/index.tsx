import SwitchItem from "@/app/components/Switch"
import { ThemeType } from "@/app/theme/types"

interface LightItemProps {
    theme: ThemeType,
    icon: string
}

const LightItem = ({
    theme,
    icon,
}: LightItemProps
) => {

    return (
        <div className="h-28 w-36 md:h-64 md:w-5/6 bg-primary-300 pt-4 px-4 m-8 rounded-2xl">
            <SwitchItem
                theme={theme}
                color="secondary"
                size="lg"
                startContent={
                    <div style={{display: 'flex'}}>
                        <span className="material-icons" style={{fontSize: '20px'}}>
                            {icon}
                        </span>
                    </div>
                }
            />
            <div className="flex w-full justify-center">
                <span 
                    className="material-icons"
                    style={{
                        fontSize: '8rem'
                    }}
                >
                    {icon}
                </span>
            </div>
        </div>
    )
}

export default LightItem