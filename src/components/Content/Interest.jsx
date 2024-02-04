import React from 'react'
import styled from 'styled-components'
import project from '../../assets/img/project1.png'
import project2 from '../../assets/img/project2.png'
import project3 from '../../assets/img/project3.png'
import project4 from '../../assets/img/project4.png'
//plugin
import {Row, Col, Container} from 'react-bootstrap'
import OverlayHover from '../Overlay/OverlayHover'

const Wrapper = styled.section`
    overflow-x: hidden;
    padding-top: 80px;
    width: 100%;
    min-height: 715px;
    background-image: radial-gradient(closest-side at 280px 290px,#C8FFD4,white);

    /* background-color: #5a83a7 !important; */
    @media (max-width: 960px) {
        flex-direction: column;
    }
`
const LeftSide = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 13rem;
  @media (max-width: 960px) {
    padding-top: 1rem;
    width: 100%;
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
const Interest =({id})=>{
    return (
        <Wrapper id={id}>
            <Container>
            <   Row className="justify-content-md-center mb-5">
                    <Col xl={4} style={{textAlign: 'center'}}>
                        <h1>Projects</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className='mt-3'>
                        <div className="project-wrap">
                            <OverlayHover linkWeb="https://cajprint.com/">
                                <img src={project} width="400" alt="Avatar" className="image" />
                            </OverlayHover>
                            <h3 className='mt-3'>CAJ Print Company Profile</h3>
                            <div className="d-flex">
                                <div className="project-info">
                                    <h5>Elementor</h5>
                                </div>
                            </div>
                        </div>
                       
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div className="project-wrap">
                            <OverlayHover linkWeb="https://am-arcticmonkeys.web.app/home.html">
                                    <img src={project2} width="400" alt="Avatar" className="image" />
                            </OverlayHover>
                            
                            <h3 className='mt-3'>Arctic Monkeys</h3>
                            <div className="d-flex">
                                <div className="project-info">
                                    <h5>HTML</h5>
                                </div>
                                <div className="project-info">
                                    <h5>CSS</h5>
                                </div>
                                <div className="project-info">
                                    <h5>JavaScript</h5>
                                </div>
                            </div>
                        </div>
                       
                    </Col>
                    <Col md={4} className='mt-3'>
                       
                       <OverlayHover linkWeb="https://currency-beryl-two.vercel.app/">
                            <img src={project3} width="400" alt="Avatar" className="image" />

                       </OverlayHover>
                       <h3 className='mt-3'>Currency</h3>
                       <div className="d-flex">
                            <div className="project-info">
                                <h5>ReactJS</h5>
                            </div>
                            <div className="project-info">
                                <h5>API</h5>
                            </div>
                            <div className="project-info">
                                <h5>JavaScript</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='mt-5'>   
                       <OverlayHover linkWeb="https://movie-list-lemon.vercel.app/">
                            <img src={project4} width="400" alt="Avatar" className="image" />

                       </OverlayHover>
                       <h3 className='mt-3'>Movie List</h3>
                       <div className="d-flex">
                            <div className="project-info">
                                <h5>ReactJS</h5>
                            </div>
                            <div className="project-info">
                                <h5>API</h5>
                            </div>
                            <div className="project-info">
                                <h5>JavaScript</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Interest