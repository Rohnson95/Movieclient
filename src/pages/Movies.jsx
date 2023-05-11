import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom';

import MovieCard from './MovieCard';

const CardListContainer = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content: center;
pading: .5em;
`;
export default function Movies() {
    const [data,setData] = useState({results:[]});
    const [page,setPage] = useState(1);
    const TMDB_GET_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=9baeecd677d8c50be742a741f245bcac&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
    const POSTER_PREFIX = 'https://image.tmdb.org/t/p/original';
    useEffect (() => {
        const fetchData = async () => {
            const result = await axios(TMDB_GET_MOVIES + '&page=' + page)
            setData(result.data);
        };
        fetchData();
    },[page]);
    const nextPage = () => {
        setPage((prevState) => prevState + 1);
    }
    const prevPage = () => {
        setPage((prevState) => prevState - 1);
    }
  return (
    <>
    Page {data.page} of {data.total_pages}
    <button onClick = {nextPage}>Next Page</button>
    <button onClick = {prevPage}>Prev Page</button>

        {data.results.map(movie =>
         <CardListContainer>   
            <MovieCard Title = {movie.title} Overview = {movie.overview} poster={POSTER_PREFIX + movie.poster_path} />
        </CardListContainer>
        )}
    <Outlet />
    </>

  )
}
