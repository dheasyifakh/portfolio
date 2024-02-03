import React,{useState,useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const NavigationBar = () =>{
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
    return(
        <Navbar className='sticky-nav' expand="xl" fixed="top" style={{ transition: '1s ease',backgroundColor: navBackground ? 'white' : 'transparent', boxShadow: navBackground ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none'}}>
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Link className='nav-link' activeClass="active" to="about" spy={true} smooth="easeInOutQuart" duration={500}>About</Link>
              <Link className='nav-link' activeClass="active" to="skills" spy={true} smooth="easeInOutQuart" duration={500}>Skills</Link>
              <Link className='nav-link' activeClass="active" to="interest" spy={true} smooth="easeInOutQuart" duration={500}>Projects</Link>
              <Link className='nav-link' activeClass="active" to="experience" spy={true} smooth="easeInOutQuart" duration={500}>Experience</Link>
              {/* <Link className='nav-link' activeClass="active" to="education" spy={true} smooth="easeInOutQuart" duration={500}>Education</Link> */}
              <Link className='nav-link' activeClass="active" to="awards" spy={true} smooth="easeInOutQuart" duration={500}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavigationBar

