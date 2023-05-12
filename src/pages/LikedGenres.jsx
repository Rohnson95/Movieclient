import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
export default function LikedGenres(){
    let { personId } = useParams();
    const [data,setData] = useState([]);
    const[genre,setGenre] = useState([]);
    const[allGenres,setAllGenres] = useState([]);
    const [likedGenres, setLikedGenres] = useState([])
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
        const fetchAllGenres = async () => {
            const result = await axios(`${api}/api/GetGenres/`);
            setAllGenres(result.data);
        }
        fetchAllGenres();
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
    border-radius: .2em;
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
const Button = styled.button`
height: 3em;
width: 10em;
display:flex;
align-items: center;
justify-content: center;
background: #9b5de7;
font-size: .8rem;
font-weight: 650;
transition: transform .4s cubic-bezier(0.77,0.2,0.05,1.0);
padding: .2em;
&:hover {
    transform: scale(1.5);
    background: #444;
    color: #bb86fc;
}
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
const ButtonDiv = styled.div`
display:flex;
width:15em;
justify-content: center;
padding: .1em;
`;
    return(
       <Div>
        <DivCard>
            <h2>Add New Genres</h2>
            {allGenres.map((genres) =>{
                if(!genre.find((gen) => gen.genreId === genres.genreId)) {
                    return (
                        <ButtonDiv key={genres.genreId}>
                            <Button>{genres.title}</Button>
                        </ButtonDiv>
                    )
                }
            })}
        </DivCard>
        <DivCard>
            <h2>Movies</h2>
            {data.map(rating =>(
                <div>
                    <p>{rating.name}</p> 
                    <P>{rating.ratings}</P>
                </div>
            ))}
        </DivCard>
        <DivCard className="info">
            <h2>Liked Genres</h2>
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