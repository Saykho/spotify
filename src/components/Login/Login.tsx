import React, { useEffect } from "react";
import { RedirectService } from "../../services/redirect-service/redirect-service";
import { NavLink } from "react-router-dom";
import { Pages } from "../../consts/pages";
import { ValueStorageService } from "../../services/value-storage/value-storage-service";
import { ValueStorageKeys } from "../../services/value-storage/value-storage-keys";
import styled from "styled-components";
import logoImage from "../../assets/img/logo.svg";

export function Login() {
    useEffect(() => {
        ValueStorageService.removeItem(ValueStorageKeys.Token);
    }, []);

    return (
        <LoginContent>
            <Logo src={logoImage} alt="Logo"/>
            <NavLink to={Pages.spotifyRedirect} className="login-link">
                <LoginButton onClick={() => RedirectService.redirectToSpotifyAuthPage()}>Войти</LoginButton>
            </NavLink>
        </LoginContent>
    );
}

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
`;

const LoginContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #0E002C;

  .login-link {
    max-width: 200px;
    width: 100%;
    height: 40px;
  }
`

const LoginButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  background: rgba(15, 10, 222, 1);
  border-radius: 8px;
  border: 1px solid rgba(15, 10, 222, 1);
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
