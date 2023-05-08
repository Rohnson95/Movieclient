import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react';

export default function CardList () {
const [data,setData] = useState([]);
const api = 'https://localhost:7283';


const Div = styled.div`
display:flex;
flex-wrap: wrap;

`;
const DivCard = styled.div`
display: flex;
flex-direction: column; 
margin: .3em;
padding: .1em;
width: 10em;
align-items: center;
border: #FFFFFF solid 1px;
border-radius: 5%;
//background: #212121;
background: #bb86fc;
//color: #FFFFFF;
color: #212121;
transition: transform .5s cubic-bezier(0.77,0.2,0.05,1.0);
&:hover {
    transform: scale(1.5);
}
`;
useEffect(() => {
    const fetchData = async () => {
        const result = await axios(api + '/api/Person',);
        setData(result.data);
    };
    fetchData();
}, [])

return(
    
    <Div className="home">
        {data.map(item =>(
            <DivCard key = {item.PersonId}>
               <h1>{item.firstName}</h1>
               <p>Click To View</p>
               <h3>{item.email}</h3>
            </DivCard>
        ))}
    </Div>
)
}