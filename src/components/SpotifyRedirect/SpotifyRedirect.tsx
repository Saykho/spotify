import React, { useEffect } from "react";
import { ValueStorageService } from "../../services/value-storage/value-storage-service";
import { ValueStorageKeys } from "../../services/value-storage/value-storage-keys";
import { RedirectService } from "../../services/redirect-service/redirect-service";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../consts/pages";

export function SpotifyRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = RedirectService.readFromUrlAccessToken();
        if (token) {
            ValueStorageService.setItem(ValueStorageKeys.Token, token);
            navigate(Pages.mainPage);
            return;
        }
        ValueStorageService.removeItem(ValueStorageKeys.Token);
        navigate(Pages.login);
    }, []);

    return null;
}