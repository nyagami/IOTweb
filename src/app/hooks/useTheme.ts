import { theme } from '../theme';
import { MD3ThemeType } from '../theme/types';
import { useSettings } from './reduxHooks';

export const useTheme = (): MD3ThemeType => {

    const { darkMode } = useSettings();
    if( darkMode) return theme.dark;
    return theme.light;
};
