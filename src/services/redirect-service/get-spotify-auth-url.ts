import { AppSettings } from "../../consts/app-settings";

export function getSpotifyAuthUrl() {
    return `https://accounts.spotify.com/authorize?response_type=token&client_id=${AppSettings.clientId}&redirect_uri=${AppSettings.redirectUrl}`;
}

