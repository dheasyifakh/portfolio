import React from 'react'
import styled from 'styled-components'

//plugin
import {Row, Col, Container} from 'react-bootstrap'

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
                <Row>
                    <Col md={6}>
                        <LeftSide>
                            <h1>Interest</h1>
                            <hr/>
                        </LeftSide>
                    </Col>
                    <Col md={6}>
                        <UlStyle>
                            <li style={{marginBottom: '3rem'}}>
                                <div style={{fontSize: '20px', display:'flex'}}>
                                    <h2>01</h2> <p style={{margin:"8px"}}>UI/UX Design</p>
                                </div>
                                <p><b>Figma, Adobe XD, HTML, CSS</b></p>
                            </li>
                            <li style={{marginBottom: '3rem'}}>
                                <div style={{fontSize: '20px', display:'flex'}}>
                                    <h2>02</h2> <p style={{margin:"8px"}}>Crafting</p>
                                </div>
                                <p><b>Crochet</b> </p>
                            </li>
                            <li style={{marginBottom: '3rem'}}>
                                <div style={{fontSize: '20px', display:'flex'}}>
                                    <h2>02</h2> <p style={{margin:"8px"}}>Web Development</p>
                                </div>
                                <p><b>HTML, CSS, Javascript, Laravel, ReactJS</b> </p>
                            </li>
                        </UlStyle>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Interest