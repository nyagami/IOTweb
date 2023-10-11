export enum ColorHue {
    RED = "red",
    BLUE = "blue",
    YELLOW = "yellow"
}

export enum ColorSaturation { 
    WEAK = "weak",
    MEDIUM = "md",
    STRONG = "strong",
}

export interface GradientColor { 
    backgroundImage: string,
    boxShadow: string,
}

export function getGradientColor (hue: ColorHue, saturation: ColorSaturation): GradientColor {
    let gradientColor: GradientColor = {
        backgroundImage: "linear-gradient(to right, #eb3941, #f15e64, #fc9fa2, #f7686f)",
        boxShadow: "0 5px 15px rgba(242, 97, 103, .4)"
    };
    switch(hue){
        case ColorHue.RED:
            if(saturation === ColorSaturation.STRONG){
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #f2a68f, #ff030a, #fa5a7d, #f50202)",
                    boxShadow: "0 5px 15px rgba(242, 97, 103, .40)"
                }
            }else if(saturation === ColorSaturation.MEDIUM){
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #f5719a, #f52c4a, #ff788c, #fc445f)",
                    boxShadow: "0 5px 15px rgba(242, 97, 103, .40)"
                }
            }else{
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #cf4c80, #d40b5b, #e0538b, #e60961)",
                    boxShadow: "0 5px 15px rgba(242, 97, 103, .40)"
                }
            }
            break;
        case ColorHue.BLUE:
            if(saturation === ColorSaturation.STRONG){
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #35bce6, #2945ff, #6986f0, #1776ff)",
                    boxShadow: "0 4px 15px 0 rgba(65, 132, 234, 0.75)",
                }
            }else if(saturation === ColorSaturation.MEDIUM){
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #2a96de, #43b4fa, #04befe, #3f86ed)",
                    boxShadow: "0 4px 15px 0 rgba(65, 132, 234, 0.75)",
                }
            }else{
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #3dacc4, #47aede, #69c3f0, #3fbced)",
                    boxShadow: "0 4px 15px 0 rgba(65, 132, 234, 0.75)",
                }
            }
            break;
        case ColorHue.YELLOW:
            if(saturation === ColorSaturation.STRONG){
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #edbd1c, #f2ff00, #ffd44f, #f2dc07)",
                    boxShadow: "0 4px 15px 0 rgba(242, 220, 7, 0.75)",
                }
            }else if(saturation === ColorSaturation.MEDIUM){
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #e68c25, #FCEE21, #edd077, #f2dc07)",
                    boxShadow: "0 4px 15px 0 rgba(242, 220, 7, 0.75)",
                }
            }else{
                gradientColor = {
                    backgroundImage: "linear-gradient(to right, #c98442, #d9ab1e, #edc94c, #c7bd08)",
                    boxShadow: "0 4px 15px 0 rgba(242, 220, 7, 0.75)",
                }
            }
            break;
        default:
            gradientColor = {
                backgroundImage: "linear-gradient(to right, #eb3941, #f15e64, #fc9fa2, #f7686f)",
                boxShadow: "0 5px 15px rgba(242, 97, 103, .4)"
            }
    }
    return gradientColor;
}