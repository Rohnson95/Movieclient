import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
export default function LikedGenres(){
    let { personId } = useParams();
    const [data,setData] = useState([]);
    const[genre,setGenre] = useState([]);
    const api = 'https://localhost:7283';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios( `${api}/api/GetRatings/?personId=${personId}`);
            setData(result.data);
        };
        fetchData();
        const fetchGenre = async () => {
            const res = await axios(`${api}/api/PersonGenre/?id=${personId}`);
            setGenre(res.data);
        };
        fetchGenre();
    }, [])

    const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    width: 15em;
    align-items: start;
    padding: 1em;
    margin: .5em;
    border: #444 solid 3px;
    border-radius: 2%;
    background: #bb86fc;
    color: #212121;
`;
const P = styled.p`
border: solid 1px #35e841;
width:38px;
display:flex;
justify-content: center;
border-radius: 50%;
background: #444;
color: #35e841;
transition: transform .5s cubic-bezier(0.77,0.2,0.05,1.0);
&:hover {
    transform: scale(1.5);
}
`;
const Div = styled.div`
display:flex;
flex-wrap: wrap;
gap:10px;

`;
    return(
       <Div>
        <DivCard>
            <h1>Movies</h1>
            {data.map(rating =>(
                <div>
                    <p>{rating.name}</p> 
                    <P>{rating.ratings}</P>
                </div>
            ))}
        </DivCard>
        <DivCard className="info">
            <h1>Liked Genres</h1>
             {genre.map(gen =>(
                <div>
                    <h3>{gen.title}</h3>
                    <p>{gen.description}</p>
                </div>
               ))}  
            <Outlet />
        </DivCard>
        </Div>
    )
}