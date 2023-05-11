import React from 'react'
import styled from 'styled-components'
const CardListContainer = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content: center;
align-items:center;
padding: .5em;
`;
const CardImage = styled.img`
display:flex;
flex-direction:column;
width:20em;
margin-top:1em;
border: 1px solid #444;
transition: transform .5s cubic-bezier(0.77,0.2,0.05,1.0);
&hover{
    transform: scale(1.5);
};
`;
const Overview = styled.p`
display:flex;
width:18em;
font-size: 1em;
background:#bb86fc;
color: #121212;
border: solid 1px #212121;
border-radius: .2em;
padding: 1em;
`;
const Title = styled.h1`
color: #bb86fc;
font-size: 1.5em;
`;
export default function MovieCard(props) {
  return (
    <CardListContainer>
        <CardImage src = {props.poster} className="Film-logo" />
        <Title>{props.Title}</Title>
        <Overview>{props.Overview}</Overview>
    </CardListContainer>
  )
}
