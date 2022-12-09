import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectActiveTrack } from "../../state/Tracks/tracks-slice";
import styled from "styled-components";

interface PlayerProps {
    className?: string;
}

export function Player(props: PlayerProps) {
    const activeTrack = useAppSelector(selectActiveTrack);

    return (
        activeTrack && (
            <PlayerComponentWrapper className={props.className}>
                <PlayerComponent>
                    <TrackImage src={activeTrack.imageUrl} alt="Album"/>
                    <TrackName>{activeTrack.name}</TrackName>
                    {activeTrack.artists.map(a => (
                        <ArtistName key={a.id}>{a.name}</ArtistName>
                    ))}
                    <audio controls autoPlay={true} src={activeTrack.previewUrl}></audio>
                </PlayerComponent>
            </PlayerComponentWrapper>
        )
    );
}

const PlayerComponentWrapper = styled.div`
  position: relative;
  width: 600px;
  background: linear-gradient(0deg, rgba(2, 23, 134, 1) 0%, rgba(0, 0, 0, 1) 68%);
`;
const PlayerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 20px;
`;

const TrackImage = styled.img`
  width: 306px;
  height: 306px;
  border-radius: 15px;
  margin-bottom: 12px;
`;

const TrackName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: white;
  text-align: center;
`;

const ArtistName = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: white;
  margin-bottom: 10px;
`;

