import { createAsyncThunk } from "@reduxjs/toolkit";
import { Track } from "../models/track.model";
import { SpotifyService } from "../../../services/spotify-service/spotify-service";

interface FetchTracksError {
    message: string;
}

export const searchTracks = createAsyncThunk<Track[], {tracksQuery: string}, { rejectValue: FetchTracksError }>(
    "tracks/search",
    async ({tracksQuery}, thunkAPI) => {
        try {
            return await SpotifyService.getTracks(tracksQuery);
        } catch (e: any) {
            console.log(e);
            return thunkAPI.rejectWithValue({
                message: e.message
            });
        }
    }
);

