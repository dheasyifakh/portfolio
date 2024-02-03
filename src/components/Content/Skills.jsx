import React from 'react'
import styled from 'styled-components'

//plugin
import {Row, Col, Container} from 'react-bootstrap'

const Wrapper = styled.section`
    overflow-x: hidden;
    padding-top: 80px;
    width: 100%;
    min-height: 715px;
    background-image: radial-gradient(655px 185px,#FDFDBD,white);
       
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
    padding: 50px 10px;
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
                <Row className='mt-5'>
                    <Col md={3}>
                        <CardWrap>
                            <h2>HTML</h2>
                        </CardWrap> 
                    </Col>
                    <Col md={3}>
                        <CardWrap>
                            <h2>CSS</h2>
                        </CardWrap>
                    </Col>
                    <Col md={3}>
                        <CardWrap>
                            <h2>JavaScript</h2>
                        </CardWrap>
                    </Col>
                    <Col md={3}>
                        <CardWrap style={{paddingTop: "30px"}}>
                            <h2>UI/UX Design</h2>
                        </CardWrap>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Skills