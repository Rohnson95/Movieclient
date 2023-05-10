import styled from 'styled-components';
import { NavLink, Outlet} from 'react-router-dom';



const HeaderContainer = styled.header` 
display:flex;
background: #212121;
height: 10vh;
color: #bb86fc;
justify-content: space-between;
align-items:center;
font-size: 2em;
gap: 10px;
margin: 0;
`;
const MainContainer = styled.main`
display:flex;
background: #121212;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
min-height: 100vh;
padding: 0;
margin: 0;
`;

const NavContainer = styled.div`
background:black;
display:flex;
`;
const Nav = styled.div`
display:flex;
flex-direction:row;
gap: 10px;
background:red;
padding: .1em;
`;
const NavSeparator = styled.div`
background: blue;
`;
export default function RootLayout() {
  return (
        <div className="root-layout">
            <HeaderContainer>
                <h1>Film Client</h1>
                    <Nav>    
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">Movies</NavLink>
                    </Nav>
            </HeaderContainer>
            <MainContainer>
                <NavLink to=":id"/>
                <Outlet />
            </MainContainer>
        </div>
  )
}
