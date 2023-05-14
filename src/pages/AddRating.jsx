import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import {Outlet,useParams} from 'react-router-dom'
import styled from 'styled-components';


export default function AddRating() {
let {movieId} = useParams();
const [rating,setRating] = useState({});
const [data,setData] = useState([]);
    
const api = 'https://localhost:7283';
const POSTER_PREFIX = 'https://image.tmdb.org/t/p/original';
 const Select = styled.select`
 width: 200px;
 background: #212121;
 color: #bb86fc;
 font-size: 1.2em;
 `;
 const SelectDiv = styled.div`
 display:flex;
 justify-content:center;
 `;
 const Img = styled.img`
 width:300px;
 `;
 const Div = styled.div`
 display:flex;
 align-content: center;
 justify-content: center;
 `;
 const P = styled.p`
 max-width: 600px;
 `;
    useEffect (() => {
        const TMDB_GET_INFO = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9baeecd677d8c50be742a741f245bcac&language=en-US`
        const fetchData = async () => {
            const result = await axios(TMDB_GET_INFO,);
            setRating(result.data);
        };
        fetchData();
        const fetchPerson = async () => {
            const result = await axios(`${api}/api/person`)
            setData(result.data);
        }
        fetchPerson();
    },[]);
    const PostMovie = async(e) => {

        console.log(rating.original_title);
        const personId = e.target.value;
          await axios.post(`${api}/api/AddMovie/?personId=${personId}&movieName=${rating.original_title}`);
    };
    const PostRating = async(e) => {
            const val = parseInt(e.target.value);
          await axios.post(`${api}/api/GiveRating/?Name=${rating.original_title}&rating=${val}`);
          console.log(val);
          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    };
  return (
    <div>
        <label>
            <SelectDiv>
                <form>
                <Select required defaultValue="" onChange={(e) =>{ PostMovie(e)}}>
                    <option hidden disabled value="">Select a user</option>   
                        {data.map(item =>
                        <option key={item.personId} value={item.personId}>{item.firstName}</option>
                        )}
                </Select>
                </form>
                <form>
                <Select required defaultValue="" onChange={(e) =>{ PostRating(e)}}>
                    <option hidden disabled value="">Rate</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </Select>
                </form>
            </SelectDiv>
        </label>
    <div>
            <Div className="title">
            <h1>{rating.original_title}</h1>
            </Div>
            <Div className="postercard">
                <Img src={POSTER_PREFIX + rating.poster_path}></Img>
            </Div>
            <Div className="overview">
                <P>{rating.overview}</P>
            </Div>
            <Div>
                <h3>Rating: {(rating.vote_average)}</h3>
            </Div>
            
            {/* <h3>{rating.overview}</h3> */}
    </div>
    </div>
    
  )
}
