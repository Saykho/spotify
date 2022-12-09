import React, { FormEvent, useState } from "react";
import SearchImg from "../../assets/img/search.svg";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { searchTracks } from "../../state/Tracks/async-actions/fetch-tracks";

interface SearchProps {
    className?: string;
}

export function Search(props: SearchProps) {
    const dispatch = useAppDispatch();
    const [tracksQuery, setTracksQuery] = useState("");

    const search = () => {
        dispatch(searchTracks({
            tracksQuery
        }));
    };

    return (
        <SearchComponent className={props.className}>
            <SearchTitle>Поиск</SearchTitle>
            <SearchForm onSubmit={e => {
                e.preventDefault();
                search();
            }}>
                <SearchInput type="text"
                             value={tracksQuery}
                             onInput={(e: FormEvent<HTMLInputElement>) => {
                                 const target = e.target as HTMLInputElement;
                                 setTracksQuery(target.value);
                             }}
                             placeholder="Найти песню"
                />
                <SearchButton type="submit"><SearchImage src={SearchImg} alt="Search"/></SearchButton>
            </SearchForm>
        </SearchComponent>
    );
}

const SearchComponent = styled.div`
  padding: 56px 96px 36px 42px;
`;

const SearchTitle = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  position: relative;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  max-width: 690px;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: none;
  padding-left: 48px;
  background: white !important;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: white !important;
  border: none;
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  width: 25px;
  height: 25px;
`;

const SearchImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: white !important;
`;

