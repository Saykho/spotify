import { Artist } from "./artist.model";

export interface Track {
    id: string;
    name: string;
    previewUrl: string;
    imageUrl: string;
    artists: Artist[];
}

