import React from 'react';
import GlobalStyle from '../style/global-style';
import styled from 'styled-components';


const Title = styled.h1`

text-align: center;

@media screen and (max-width: 500px){
  
   margin-top: 15%;
   
}


`
const Content = styled.div`

display: grid;
justify-items: center;

img{

	width: 75%;
}

@media screen and (max-width: 768px){
  
  img{

  	height: 600px;
  }
}



`

function Home() {


  return (

    <div>
      <GlobalStyle />
      <Title>Draw-Canvas: One design for everything</Title>
      <Content>
        <img src="./img/moster_artist.svg"/>
      </Content>
    </div>
  )
}

export default Home;