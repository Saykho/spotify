import React from "react";
import { Navigate } from "react-router-dom";
import { ValueStorageKeys } from "../../services/value-storage/value-storage-keys";
import { ValueStorageService } from "../../services/value-storage/value-storage-service";
import { Pages } from "../../consts/pages";

interface GuardedRouteProps {
    children: JSX.Element;
}

export function GuardedRoute(props: GuardedRouteProps) {
    if (!ValueStorageService.getItem(ValueStorageKeys.Token)) {
        return <Navigate to={Pages.login}/>
    }

    return props.children;
}