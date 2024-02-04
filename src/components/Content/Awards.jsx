import React from 'react'
import styled from 'styled-components'

//plugin
import {Row, Col, Container} from 'react-bootstrap'
import { FaLinkedin,  FaGithub, FaBehanceSquare, FaEnvelope  } from "react-icons/fa";


const Wrapper = styled.section`
    overflow-x: hidden;
    padding-top: 80px;
    width: 100%;
    min-height: 715px;
    background-image: radial-gradient(closest-corner at 80% 40%,#ff9393af,white);

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
const Awards =({id})=>{
    return (
        <Wrapper id={id}>
            <Container>
                <Row>
                    <Col md={6}>
                        <LeftSide>
                            <h1>Contact</h1>
                            <hr/>
                        </LeftSide>
                    </Col>
                    <Col md={6} className='mt-5 pt-5 text-center'>
                        {/* <UlStyle>
                            <li style={{marginBottom: '3rem'}}>
                                <div style={{fontSize: '20px', display:'flex'}}>
                                    <h2>-</h2> <p style={{margin:"8px"}}>Email <FaEnvelope/></p>
                                </div>
                                <p><b>dheasyifakhoirunnisa@gmail.com</b></p>
                            </li>
                            <li style={{marginBottom: '3rem'}}>
                                <div style={{fontSize: '20px', display:'flex'}}>
                            
                                    <h2>-</h2> <p style={{margin:"8px"}}>Linkedin <FaLinkedin/></p>
                                </div>
                                <a href="https://www.linkedin.com/in/dhea-syifa-khoirunnisa-aa7baa153/" target='_blank' style={{ color:"black"}}>
                                Dhea Syifa Khoirunnisa
                          </a>
                            </li>
                    
                        </UlStyle> */}
                        <div className="">
                            <h3>Contact me through: </h3>
                            <a href="mailto:dheasyifakhoirunnisa@gmail.com" target='_blank' className='btn btn-success' style={{backgroundColor: "#93e1a4", border:"#93e1a4"}}>Email {''} <FaEnvelope/></a>
                            <h3 className='mt-5'>or find me on:</h3>
                            <div className="d-flex justify-content-center">
                                <a href="https://www.linkedin.com/in/dhea-syifa-khoirunnisa-aa7baa153/" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                                    <FaLinkedin/>
                                </a>
                                <a href="https://github.com/dheasyifakh" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                                    <FaGithub/>
                                </a>
                                <a href="https://www.behance.net/dheasykhoirunnisa" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                                    <FaBehanceSquare/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Awards