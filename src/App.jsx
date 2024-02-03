import React from 'react'
import './App.css'
import Header from './components/Content/Header'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/Navbar/NavigationBar'
import LandingPage from './components/LandingPage'


function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}>

        </Route>
       
      
      </Routes>
       
    </div>
  )
}

export default App
