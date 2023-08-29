import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingsReducer from './settingsSlice';

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    settingsReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>
