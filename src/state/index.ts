import { configureStore } from "@reduxjs/toolkit";
import TracksReduce from "../state/Tracks/tracks-slice"

export const store = configureStore({
    reducer: {
        tracks: TracksReduce,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;