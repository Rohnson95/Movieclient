import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
export default function About() { 
    const[data,setData] = useState({results:[]});
    const TMDB_GET_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=9baeecd677d8c50be742a741f245bcac&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate';
    const[page,setPage] = useState(1);
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await axios(TMDB_GET_MOVIES + "&page" + page);
            setData(result.data);
        };
        fetchData();
    }, [page]);
    const nextPage = () => {
        setPage((prevState) => prevState + 1);
    }
    const prevPage = () => {
        setPage((prevState) => prevState -1);
    }
    return (
        <div classname="Movies">
            Page {data.page} of {data.total_pages}
            <button onClick = {nextPage}>Next Page</button>
            <button onclick = {prevPage}>Prev Page</button>
            {data.results.map(movie =>(
              <h1>{movie.title}</h1>  
            ))}
            <p>lorem</p>
        </div>
    )
}