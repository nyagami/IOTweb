import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();


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
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>
