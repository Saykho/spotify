import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectTracks, setActiveTrack } from "../../state/Tracks/tracks-slice";
import styled, { keyframes } from "styled-components";
import { TrackInfo } from "../Track/Track";
import { Search } from "../Search/Search";
import { Player } from "../Player/Player";

export function MainPage() {
    const dispatch = useAppDispatch();
    const tracks = useAppSelector(selectTracks);

    return (
        <MainPageComponent>
            <AnimatedPlayer/>
            <Home>
                <TrackSearch/>
                {tracks.find(t => t.id) ?
                    <TackList>
                        {tracks.map(track => (
                            <TrackInfo onClick={(trackId) => {
                                dispatch(setActiveTrack({
                                    id: trackId
                                }));
                            }} track={track} key={track.id}/>
                        ))}
                    </TackList>
                    : <NotFoundMessage>Такая песня не найдена</NotFoundMessage>
                }

            </Home>
        </MainPageComponent>
    );
}

const MainPageComponent = styled.div`
  height: 100%;
  display: flex;
`;

const Home = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const TackList = styled.div`
  padding: 0 76px 0 56px;
`;

const playerAnim = keyframes`
  from {
    width: 0;
  }

  to {
    width: 600px;
  }
`;

const AnimatedPlayer = styled(Player)`
  animation: ${playerAnim} 0.5s ease-in;
`;

const TrackSearch = styled(Search)`
  position: sticky;
  top: 0;
  left: 0;
  background: #0E002C;
`;

const NotFoundMessage = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 62px;
`;
