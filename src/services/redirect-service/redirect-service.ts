import { getSpotifyAuthUrl } from "./get-spotify-auth-url";
import { ValueStorageKeys } from "../value-storage/value-storage-keys";
import { ValueStorageService } from "../value-storage/value-storage-service";

class RedirectServiceImpl {
    redirectToSpotifyAuthPage() {
        window.location.href = getSpotifyAuthUrl();
    }

    readFromUrlAccessToken() {
        return window.location.href.split("&")[0].split("=")[1];
    }
}

export const RedirectService = new RedirectServiceImpl();