import { useTheme } from "@/app/hooks/useTheme"

const Footer = () => {
    const theme = useTheme();

    return (
        <div style={{height:'10rem', backgroundColor: 'white'}} className="text-right pr-5 pt-2">
            @by Đỗ Hoàng Quân - B20DCCN546
        </div>
    )
}

export default Footer;