import { HttpClient } from "../http-client/http-client";
import { Track } from "../../state/Tracks/models/track.model";
import { GetTracksResponse } from "./models/get-tracks-response.model";
import { Artist } from "../../state/Tracks/models/artist.model";

class SpotifyServiceImpl {
    getTracks(tracksQuery: string): Promise<Track[]> {
        return HttpClient.get<GetTracksResponse>(`search?type=track&include_external=audio&q=track:${tracksQuery}`).then(data => {
            return data.tracks.items.filter(track => !!track.preview_url).map(track => {
                return {
                    artists: track.artists?.map(a => {
                        return {
                            name: a.name,
                            id: a.id
                        } as Artist;
                    }),
                    name: track.name,
                    id: track.id,
                    previewUrl: track.preview_url,
                    imageUrl: track.album?.images[0]?.url,
                } as Track;
            });
        });
    }
}

export const SpotifyService = new SpotifyServiceImpl();