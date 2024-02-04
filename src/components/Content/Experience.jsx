import React from 'react'
import styled from 'styled-components'

//plugin
import {Row, Col, Container} from 'react-bootstrap'
import cv from '../../assets/file/DheaSyifaKhoirunnisa-CV.pdf'
import { FaDownload } from "react-icons/fa";

const Wrapper = styled.section`
    overflow-x: hidden;
    padding-top: 80px;
    width: 100%;
    min-height: 715px;
    background-image: radial-gradient(closest-corner at 80% 40%,#b8e8fcd5,white);
       
    /* background-color: #5a83a7 !important; */
    @media (max-width: 960px) {
        flex-direction: column;
        background-image: radial-gradient(655px 185px,#b8e8fcd5,white);

    }
`
const LeftSide = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 13rem;
  @media (max-width: 960px) {
    width: 100%;
    padding-top: 1rem;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`
const UlStyle = styled.section `
    list-style-type: none;
    padding: 7rem 0 7rem 10rem;
    @media (max-width:960px){
        padding: 2rem;
    }
`
const Experience =({id})=>{
    return (
        <>
            <Wrapper id={id}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <LeftSide>
                                <h1>Experience</h1>
                                <hr/>
                                <p>or download my resume <a href={cv} style={{textDecoration: "none", color:"#4ebae8d3"}}download="Dhea-CV">here <FaDownload/></a></p>
                            </LeftSide>
                        </Col>
                        <Col md={6}>
                            <UlStyle>
                                <li style={{marginBottom: '3rem'}}>
                                    <div style={{fontSize: '20px', display:'flex'}}>
                                        <h2>01</h2> <p style={{margin:"8px"}}>Internship Front-End Web Developer</p>
                                    </div>
                                    <p><b>PT Cyberindo Aditama</b> (March 2019 - February 2020)</p>
                                    <hr/>
                                </li>
                                <li style={{marginBottom: '3rem'}}>
                                    <div style={{fontSize: '20px', display:'flex'}}>
                                        <h2>02</h2> <p style={{margin:"8px"}}>UI/UX Front-End Developer</p>
                                    </div>
                                    <p><b>PT Bahagia Lintas Iklan</b> (November 2020 - October 2021)</p>
                                    <hr/>
                                </li>
                                <li>
                                    <div style={{fontSize: '20px', display:'flex'}}>
                                        <h2>03</h2> <p style={{margin:"8px"}}>UI/UX Front-End Developer</p>
                                    </div>
                                    <p><b>PT Spentera</b> (October 2021 - Present)</p>
                                    <hr/>
                                </li>
                            </UlStyle>
                            
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export default Experience