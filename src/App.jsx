import React from 'react';
import styled from 'styled-components';
import {Route, 
        createBrowserRouter,
        createRoutesFromElements,
        RouterProvider} from 'react-router-dom';

import CardList from './pages/Home';
import About from './pages/Movies';
import RootLayout from './layouts/RootLayout';
import LikedGenres from './pages/LikedGenres';
import Movies from './pages/Movies';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element= {<CardList />}/>
      <Route path="LikedGenres/:personId" element={<LikedGenres/>}/>
      <Route path="movies" element={<Movies/>}/>
    </Route>
  )
)

const Nav = styled.nav`
display:flex;
flex-direction:row;
margin: .2em;
justify-content:start;
align-items: end;
background:red;
align-content:end;
`;


function App() {
  return (
        <RouterProvider router={router} />
  );
}
export default App;