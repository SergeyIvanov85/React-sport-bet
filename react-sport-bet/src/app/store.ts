import { configureStore } from '@reduxjs/toolkit';

import betReducer from './betSlice';

export const store = configureStore({
    reducer: {
        bets: betReducer
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;