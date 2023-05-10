import React from 'react';
import styled from 'styled-components';
import {Route, 
        createBrowserRouter,
        createRoutesFromElements,
        RouterProvider} from 'react-router-dom';

import CardList from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import LikedGenres from './pages/LikedGenres';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element= {<CardList />} />
      <Route path = "/about" element= {<About />} />
      <Route path=":id" element ={<LikedGenres />} />
      
      
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