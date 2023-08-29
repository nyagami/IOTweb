import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsSlice { 
    darkMode: boolean
}

const initialState: SettingsSlice = {
    darkMode: true
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        switchTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {
    switchTheme
} = settingsSlice.actions;

export default settingsSlice.reducer;

