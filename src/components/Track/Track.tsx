import React from "react";
import { Track } from "../../state/Tracks/models/track.model";
import styled from "styled-components";

interface TrackProps {
    track: Track;
    onClick?: (trackId: string) => void;
}

export function TrackInfo(props: TrackProps) {
    return (
        <TrackInfoComponent onClick={() => {
            if (props.onClick && props.track) {
                props.onClick(props.track.id);
            }
        }}>
            <TrackImage src={props.track.imageUrl} alt="Album"/>

            <TrackContent>
                <Name>{props.track.name}</Name>
                <Artist>
                    {props.track.artists.map(a => (
                        <ArtistName key={a.id}>{a.name}</ArtistName>
                    ))}
                </Artist>
            </TrackContent>

        </TrackInfoComponent>
    );
}

const TrackInfoComponent = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;

  &:hover {
    background: rgba(96, 95, 95, 0.4);
    cursor: pointer;
    border-radius: 10px;
  }
`;

const Name = styled.div`
  color: white;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Artist = styled.div`
  display: flex;
`;

const ArtistName = styled.div`
  color: white;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
`;

const TrackImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;