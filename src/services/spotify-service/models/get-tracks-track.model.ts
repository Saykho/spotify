import { Artist } from "../../../state/Tracks/models/artist.model";

export interface GetTracksTrack {
    id: string;
    name: string;
    preview_url: string;
    artists: Artist[];
    album: {
        images: {
            url: string;
        }[]
    };
}