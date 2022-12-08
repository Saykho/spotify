import { Track } from "./models/track.model";
import { createSlice } from "@reduxjs/toolkit";
import { searchTracks } from "./async-actions/fetch-tracks";
import { RootState } from "../index";


export enum TracksStateStatus {
    idle = "idle",
    loading = "loading",
}

export interface TracksState {
    tracks: Track[];
    error: null | string;
    status: TracksStateStatus;
    loading: boolean;
}

const initialState: TracksState = {
    tracks: [],
    error: null,
    status: TracksStateStatus.idle,
    loading: false,
};

export const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchTracks.pending, (state) => {
            state.status = TracksStateStatus.loading;
            state.error = null;
        });
        builder.addCase(searchTracks.fulfilled, (state, {payload}) => {
            state.tracks = payload;
            state.status = TracksStateStatus.idle;
        });
        builder.addCase(searchTracks.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = TracksStateStatus.idle;
        });
    }
});

export const { } = tracksSlice.actions;
export default tracksSlice.reducer;

export const selectTracks = (state: RootState) => state.tracks.tracks;
export const selectStatus = (state: RootState) => state.tracks.status;
export const selectIsTracksLoading = (state: RootState) => state.tracks.status === TracksStateStatus.loading;