import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectTracks } from "../../state/Tracks/tracks-slice";
import { searchTracks } from "../../state/Tracks/async-actions/fetch-tracks";

export function MainPage() {
    const tracks = useAppSelector(selectTracks);
    const dispatch = useAppDispatch();
    const [tracksQuery, setTracksQuery] = useState("");

    const search = () => {
        dispatch(searchTracks({
            tracksQuery
        }));
    };

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();
                search();
            }}>
                <input type="text"
                       value={tracksQuery}
                       onInput={(e: FormEvent<HTMLInputElement>) => {
                           const target = e.target as HTMLInputElement;
                           setTracksQuery(target.value);
                       }}
                />
                <button type="submit">Search</button>
            </form>
            {tracks.map(t => (
                <div key={t.id}>
                    Name: {t.name}
                    <audio controls src={t.previewUrl}></audio>
                    <div></div>
                </div>
            ))}
        </>
    );
}