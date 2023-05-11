import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import React from 'react';
export default function AboutDetails() {
    const [data,setData] = useState([]);
    const {id} = useParams();
   
    const api = 'https://localhost:7283';
    useEffect(() => {
        fetchDataLoader();
    }, [id])
     const fetchDataLoader = async () => {
        try {
            const result = await axios.get(api + '/api/GetRatings/?personId=' + id);
            setData(result.data);
        } catch(error){
            console.error(error);
        }
    };
  return (
    <div>

         {data.map(item => ( 
            <div key={item.PersonId}>
            <h2>{item.name} Rating:{item.ratings}</h2>
            </div>
        ))}
    </div>
  )
}
