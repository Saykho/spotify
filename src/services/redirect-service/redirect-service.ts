import { getSpotifyAuthUrl } from "./get-spotify-auth-url";

class RedirectServiceImpl {
    redirectToSpotifyAuthPage() {
        window.location.href = getSpotifyAuthUrl();
    }

    readFromUrlAccessToken() {
        return window.location.href.split("&")[0].split("=")[1];
    }
}

export const RedirectService = new RedirectServiceImpl();