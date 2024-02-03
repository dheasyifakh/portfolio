import React from 'react'
import styled from 'styled-components'
import project from '../../assets/img/project1.png'
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
            <   Row className="justify-content-md-center mb-5">
                    <Col xl={4} style={{textAlign: 'center'}}>
                        <h1>Projects</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                       <img src={project} width="400"/>
                       <h3>CAJ Print Website Company Profile</h3>
                    </Col>
                    <Col md={4}>
                       
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Interest