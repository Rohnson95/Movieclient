import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import {Outlet,useParams} from 'react-router-dom'
export default function AddRating() {
    let {movieId} = useParams();
    const [data,setData] = useState({results:[]});
    const api = 'https://localhost:7283';

    const TMDB_GET_INFO = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9baeecd677d8c50be742a741f245bcac&language=en-US`
    useEffect (() => {
        const fetchData = async () => {
            const result = await axios(TMDB_GET_INFO)
            setData(result.data);
        };
        fetchData();
    },[]);
    const postRating = async(e) => {

    }
  return (
    <div>
        {data.results.map(movie =>  
            <div key={movie.id}>
                <h3>{movie.overview}</h3>
            </div>
        )}
        <Outlet />
    </div>
    
  )
}
