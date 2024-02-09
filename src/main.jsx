import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import styled, { css } from 'styled-components';

// import './assets/font/Gallery/GalleryModern.otf'
const Gradient = styled.div`
  
position: absolute;
  width: 350px;
  height: 350px;
  filter: blur(calc(350px / 5));
  background-image: linear-gradient(#E8F79A,#49D292, #0B60B0);
  animation: rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  

`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
