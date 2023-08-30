import { ThemeType } from "./types";

interface Themes {
    light: ThemeType,
    dark: ThemeType
}

export const theme: Themes = {
    light: {
        name: 'light',
        isDark: false,
        text: 'rgba(0, 0, 0, 0.87)',
        textMedium: 'rgb(0, 0, 0, 0.60)',
        textLight: 'rgb(0, 0, 0, 0.38)',
        background: '#F0F2F5',
        panel: '#FAFAFA',
        border: '#E8E8E8',
        primary: '#2673DD',
        warning: '#FFBB00',
        error: '#EE2C4A',
        success: '#44CC77',
        highlightBK: 'rgba(255, 122, 69, 0.87)',
        highlightCK: 'rgba(250, 219, 20, 0.87)',
        highlightSK: 'rgba(255, 94, 210, 0.87)',
    },
    dark: {
        name: 'dark',
        isDark: true,
        text: 'rgba(255, 255, 255, 0.87)',
        textMedium: 'rgb(255, 255, 255, 0.60)',
        textLight: 'rgb(255, 255, 255, 0.38)',
        background: '#121212',
        panel: '#222222',
        border: 'rgba(255, 255, 255, 0.09)',
        primary: '#2673DD',
        warning: '#B28400',
        error: '#A8283D',
        success: '#309053',
        highlightBK: 'rgba(255, 122, 69, 0.87)',
        highlightCK: 'rgba(250, 219, 20, 0.87)',
        highlightSK: 'rgba(255, 94, 210, 0.87)',
    },
};
