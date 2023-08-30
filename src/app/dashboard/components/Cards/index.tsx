
interface CardProps {
    title: string,
    description: string,
    accentColor: string, 
}

const Card = ({
    title,
    description,
    accentColor
}: CardProps
) => { 
    return (
        <div
            className="h-32 w-32 border-radi"
            style={{backgroundColor: accentColor}}
        >

        </div>
    )
}

interface NumberCardProps {
    title: string,
    num: number;
    icon: string;
    unit: string;
}

const NumberCard = ({
    title,
    num,
    icon,
    unit,
}: NumberCardProps) => {
    return (
        <div
            style={{
                height: '8rem',
                width: '20rem',
                backgroundColor: 'white',
                borderRadius: '2rem',
                display: 'flex',
                alignItems: 'center',
                padding: '1rem'
            }}
        >
            <div 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f0f2',
                    height: '5rem',
                    width: '5rem',
                    borderRadius: '2rem',
                }}
            >
                <span className="material-icons" style={{fontSize: '40px'}}>
                    {icon}
                </span>
            </div>
            <div 
                style={{ color: 'black', fontWeight: '700'}}
                className="ml-8"
            >

                <div>{title}</div>
                <div 
                    style={{
                        fontSize: '40px'
                    }}
                >
                    {num}
                    <span style={{fontSize: '20px'}}>{unit}</span>
                </div>
                
            </div>
        </div>
    )
}

export {
    NumberCard
}
export default Card