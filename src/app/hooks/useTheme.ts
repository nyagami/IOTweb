import { theme } from '../theme';
import { ThemeType } from '../theme/types';
import { useSettings } from './reduxHooks';

export const useTheme = (): ThemeType => {

    const { darkMode } = useSettings();
    if( darkMode) return theme.dark;
    return theme.light;
};
