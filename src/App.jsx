import React,{useState} from 'react'
// import './App.css'
import Header from './components/Content/Header'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/Navbar/NavigationBar'
import LandingPage from './components/LandingPage'
import Home from './components/Home'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <div  >
      <NavigationBar handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>
      <Routes>
        <Route path="/" element={<LandingPage darkMode={darkMode}/>}>

        </Route>
       <Route  path="/home" element={<Home/>}></Route>
      
      </Routes>
       
    </div>
  )
}

export default App
