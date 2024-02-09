import React from 'react'
import styled from 'styled-components'

//plugin
import {Row, Col, Container} from 'react-bootstrap'
import { FaHtml5, FaCss3Alt, FaFigma, FaReact, FaGit, FaBootstrap,FaWordpress  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbFileTypeSql } from "react-icons/tb";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
const Wrapper = styled.section`
    overflow-x: hidden;
    padding-top: 80px;
    width: 100%;
    min-height: 715px;
    /* background-image: radial-gradient(655px 185px,#FDFDBD,white); */
       
    /* background-color: #5a83a7 !important; */
    @media (max-width: 960px) {
        flex-direction: column;
    }
`
const CardWrap = styled.section`
    border-radius: 50%;
    text-align: center;
    background-color: #ffffff11;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 40px 10px;
    width: 9rem;
    height: 9rem;
`
const Skills =({id})=>{
    return (
        <Wrapper id={id}>
            <Container>
                <Row className="justify-content-md-center mb-5">
                    <Col xl={4} style={{textAlign: 'center'}}>
                        <h1>Skills</h1>
                        <hr/>
                    </Col>
                </Row>
                <br/>
                <Row className='mt-3'>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                            <FaHtml5 style={{fontSize: "52px"}}/>
                            <h5>HTML</h5>
                        </CardWrap> 
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                            <FaCss3Alt style={{fontSize: "52px"}}/>
                            <h5>CSS</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                            <IoLogoJavascript style={{fontSize: "52px"}}/>
                            <h5>JavaScript</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                            <SiTypescript style={{fontSize: "52px"}}/>
                            <h5>TypeScript</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <FaFigma style={{fontSize: "52px"}}/>
                            <h5>Figma</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <FaReact style={{fontSize: "52px"}}/>
                            <h5>ReactJS</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <TbBrandNextjs style={{fontSize: "52px"}}/>
                            <h5>NextJS</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <TbFileTypeSql style={{fontSize: "52px"}}/>
                            <h5>SQL</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <FaGit style={{fontSize: "52px"}}/>
                            <h5>Git</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <FaBootstrap style={{fontSize: "52px"}}/>
                            <h5>Bootstrap</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <SiTailwindcss style={{fontSize: "52px"}}/>
                            <h5>Tailwind CSS</h5>
                        </CardWrap>
                    </Col>
                    <Col md={2} className="mt-4 d-flex align-items-center justify-content-center">
                        <CardWrap className='animate__animated animate__fadeInLeft '>
                        <FaWordpress style={{fontSize: "52px"}}/>
                            <h5>Elementor</h5>
                        </CardWrap>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Skills