import React from 'react'
import Awards from './Content/Awards'
import Education from './Content/Education'
import Experience from './Content/Experience'
import Interest from './Content/Interest'
import Skills from './Content/Skills'
import Header from './Content/Header'

export default function LandingPage(){
    return(
        <div>
            <Header id="about"/>
            {/* <Education id="education"/> */}
            <Skills id="skills"/>
            <Interest id="interest"/>
            <Experience id="experience"/>
            <Awards id="awards"/>
        </div>

    )
}