import React from 'react';
import { Login } from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Pages } from "./consts/pages";
import { GuardedRoute } from "./components/GuardedRoute/GuardedRoute";
import { SpotifyRedirect } from "./components/SpotifyRedirect/SpotifyRedirect";
import { MainPage } from "./components/MainPage/MainPage";
import "./App.scss";

function App() {
    return (
        <Routes>
            <Route path={Pages.login} element={<Login/>}/>
            <Route path={Pages.spotifyRedirect} element={<SpotifyRedirect/>}/>
            <Route path={Pages.mainPage} element={<GuardedRoute children={<MainPage/>}/>}/>
        </Routes>
    );
}

export default App;
