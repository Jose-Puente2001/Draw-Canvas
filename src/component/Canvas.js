import React, { useRef, useState, useEffect } from 'react';
import CanvasDraw from "react-canvas-draw";
import GlobalStyle from '../style/global-style';
import styled from 'styled-components';


const Container = styled.div`

display: flex;
justify-content: center;
margin-top: 20px;


@media screen and (max-width: 768px){
  
  flex-direction: column;
  align-items: center;

  button{
     
     width: 200px;
  }

}


`

function Canvas() {

  const firscanvas = useRef(null);
  const secondcanvas = useRef(null);
  const [color, setColor] = useState("#ffc600");

  useEffect(() => {
    window.setInterval(() => {

      setColor('#' + Math.floor(Math.random() * 16777215).toString(16));

    }, 3000)

  });

  const SaveDate = () => {
    const data = firscanvas.current.getSaveData();
    secondcanvas.current.loadSaveData(data);
  }

  const Clear = () => {

    firscanvas.current.clear();
  }

  const Undo = () => {

    firscanvas.current.undo();
  }

  return (
    <>

      <GlobalStyle />
      <Container>
        <button onClick={Clear}>Clear</button>
        <button onClick={SaveDate}>SaveDate</button>
        <button onClick={Undo}>Undo</button>
      </Container>
      <Container>
        <CanvasDraw
          ref={firscanvas}
          brushColor={color}
          brushRadius={12}
          style={{ border: '1px solid black' }}
        />

        <CanvasDraw
          ref={secondcanvas}
          style={{ border: '1px solid black' }}
        />
      </Container>
    </>

  )
}

export default Canvas;