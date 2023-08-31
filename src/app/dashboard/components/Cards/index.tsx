import styles from './Card.module.css'

interface NumberCardProps {
    title: string,
    num: number;
    icon: string;
    unit: string;
    backgroundImage?: string,
    boxShadow?: string,
}

const NumberCard = ({
    title,
    num,
    icon,
    unit,
    backgroundImage,
    boxShadow,
}: NumberCardProps) => {
    return (
        <div
            className={styles.card + " relative w-5/6 mx-auto flex md:w-80 mb-4 md:mb-0"}
            style={{
                height: '8rem',
                borderRadius: '2rem',
                alignItems: 'center',
                padding: '1rem',
                backgroundSize: '300% 100%',
                backgroundImage: backgroundImage,
                boxShadow: boxShadow,
                cursor: 'pointer',
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