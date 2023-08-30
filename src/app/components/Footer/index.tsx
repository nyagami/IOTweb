import { useTheme } from "@/app/hooks/useTheme"

const Footer = () => {
    const theme = useTheme();

    return (
        <footer 
            style={{
                backgroundColor: theme.background,
                color: theme.text
            }}
        >
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">
                    © Đỗ Hoàng Quân <a href="https://github.com/nyagami/IOTweb" target="_blank" className="text-primary hover:underline">nyagami™</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;