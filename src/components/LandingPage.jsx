import React from 'react'
import Awards from './Content/Awards'
import Experience from './Content/Experience'
import Interest from './Content/Interest'
import Skills from './Content/Skills'
import Header from './Content/Header'

export default function LandingPage(){
    return(
        <div className='landing-page' >
            <div className="background"><div className="gradient"></div></div>
            <Header id="about"/>
            <Skills id="skills"/>
            <Interest id="interest"/>
            <Experience id="experience"/>
            <Awards id="awards"/>
        </div>

    )
}