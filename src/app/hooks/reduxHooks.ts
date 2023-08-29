import { useSelector } from 'react-redux';
import { switchTheme } from '../redux/settingsSlice';
import { AppState } from '../redux/store';

export const useSettings = () => {
    const settings = useSelector((state: AppState) => state.settingsReducer);
    return settings;
}
