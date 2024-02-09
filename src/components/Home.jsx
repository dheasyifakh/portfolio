import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// Styled components for the background
const Background = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  background: ${props => (props.darkMode ? '#121212' : '#f0f0f0')};
  transition: background 0.3s ease;
`;

// Styled components for the circle
const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => (props.darkMode ? '#fff' : '#333')};
  transition: background-color 0.3s ease, transform 0.1s ease;
  ${props =>
    props.isHovered &&
    css`
      transform: translate(-50%, -50%) translate(${props.mouseX}px, ${props.mouseY}px);
    `}
`;

const Gradient = styled.div`
  

  width: 350px;
  height: 350px;
  filter: blur(calc(350px / 5));
  background-image: linear-gradient(#E8F79A,#49D292, #0B60B0);
  animation: rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  ${props => props.isHovered && css`
    transform: translate(${props => props.mouseX}px, ${props => props.mouseY}px);
  `}

`
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX - 25);
    setMouseY(e.clientY - 25);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <Background darkMode={darkMode} onMouseMove={handleMouseMove}>
      {/* <Circle
        darkMode={darkMode}
        isHovered={isHovered}
        mouseX={mouseX}
        mouseY={mouseY}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          top: mouseY - 25, // Adjusted to center the circle
          left: mouseX - 25, // Adjusted to center the circle
        }}
      /> */}
      <Gradient 
      isHovered={isHovered} mouseX={mouseX} mouseY={mouseY}
      />
      <button onClick={handleToggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </Background>
  );
};

export default Home;
