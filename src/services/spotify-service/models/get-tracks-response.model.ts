import { GetTracksTrack } from "./get-tracks-track.model";
export interface GetTracksResponse {
    tracks: {
        items: GetTracksTrack[];
    }
}