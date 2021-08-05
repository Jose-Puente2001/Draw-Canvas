import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavStyled = styled.nav`

  padding: 20px;

`
const UlStyled = styled.ul`
  
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;

  a{
     text-decoration: none;
  }

`


function Navbar() {

  return (

    <NavStyled>
      <UlStyled>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/canvas" >Canvas</Link></li>
      </UlStyled>
    </NavStyled>
  )
}

export default Navbar;