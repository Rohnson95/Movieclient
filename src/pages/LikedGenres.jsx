import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function LikedGenres(){
    const [data,setData] = useState([]);
    const api = 'https://localhost:7283';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(api + '/api/PersonGenre/',);
            setData(result.data);
        };
        fetchData();
    }, [])
    return(
        <div className="info">
             {data.map(item =>(
            <div key = {item.PersonId}>
               <h1>{item.Name   }</h1>              
            </div>
            
        ))}
            <Outlet />
        </div>
        
    )
}