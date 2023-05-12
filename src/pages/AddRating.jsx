import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import {Outlet,useParams} from 'react-router-dom'
export default function AddRating() {
    let {movieId} = useParams();
    const [rating,setRating] = useState({});
    const api = 'https://localhost:7283';
    
    
    useEffect (() => {
        const TMDB_GET_INFO = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9baeecd677d8c50be742a741f245bcac&language=en-US`
        const fetchData = async () => {
            const result = await axios(TMDB_GET_INFO,);
            setRating(result.data);
            console.log(movieId);
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            console.log(result.data);
        };
        fetchData();
    },[]);
    const postRating = async(e) => {    

    }
  return (
    <div>
        <div>
        <h1>{rating.original_title}</h1>
        <h3>{rating.overview}</h3>
        </div>
    
    </div>
    
  )
}
