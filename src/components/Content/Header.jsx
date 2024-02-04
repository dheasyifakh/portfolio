import React from 'react'
import styled from 'styled-components'
import background from '../../assets/img/Background.png'
import profile from '../../assets/img/IMG_8989.png'
import shape from '../../assets/img/shape.png'

//plugin
import {Row, Col} from 'react-bootstrap'
import TypeWriter from '../TypeWriter/TypeWriter'
import { FaLinkedin,  FaGithub, FaBehanceSquare, FaEnvelope  } from "react-icons/fa";

const Wrapper = styled.section`
    overflow-x: hidden;
    padding-top: 80px;
    width: 100%;
    min-height: 715px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: #5a83a7 !important; */
    @media (max-width: 960px) {
        flex-direction: column;
    }
`
const LeftSide = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 10rem;
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
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  padding: 1rem 0 0;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 60%;
  position: absolute;
  margin-top: 2rem;
  /* margin-right: 1rem; */
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const Shape = styled.img`
  width: 60%;
  transform: rotate(308deg);
`
const Header = ({id}) =>{
    return (
        <Wrapper id={id}>
            <div className="container">
                {/* <LeftSide className='flexCenter'>
                    <div>
                        <div className='title-web'>
                            <i>Hello,</i> My name is Dhea
                        </div>
                        <p>I'm a Front-End Web Developer. I'm from Jakarta and I'm currently living in Tangerang, Banten, Indonesia. I have been working as a Web Developer more than 3 years.
                            I have interest in UI/UX Design, Front-End Development and also some Craft. I create Web UI Design and convert to rapid prototyping with HTML, CSS & Javascript</p>
                    </div>

                </LeftSide>
                <RightSide>
                    <ImageWrapper>
                      <Img src={profile} style={{zIndex:9}}/>
                    </ImageWrapper>
                </RightSide> */}
                <Row>
                  <Col md={6}>
                    <LeftSide>
                    <div className='title-web'>
                            <i>Hello,</i> <TypeWriter text="My name is Dhea" delay={100}/>
                        </div>
                        <br/>
                        <p>I'm a Front-End Web Developer. I'm from Jakarta and I'm currently living in Tangerang, Banten, Indonesia. I have been working as a Web Developer more than 4 years.
                            I have interest in UI/UX Design and Front-End Development. My journey in web development began with a strong foundation in HTML, CSS, and JavaScript. Over the years, I've honed my skills in these core technologies while staying abreast of the latest trends and best practices in frontend development.</p>
                        <br />
                        <p>Find me on:</p>
                        <div className="d-flex ">
                          <a href="https://www.linkedin.com/in/dhea-syifa-khoirunnisa-aa7baa153/" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                            <FaLinkedin/>
                          </a>
                          <a href="https://github.com/dheasyifakh" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                            <FaGithub/>
                          </a>
                          <a href="https://www.behance.net/dheasykhoirunnisa" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                            <FaBehanceSquare/>
                          </a>
                          <a href="mailto:dheasyifakhoirunnisa@gmail.com" target='_blank' style={{fontSize: '36px', marginRight:'5px', color:"black"}}>
                            <FaEnvelope/>
                          </a>
                        </div>
                    </LeftSide>

                  </Col>
                  <Col md={6}>
                    <ImageWrapper>
                      <Shape  src={shape} />
                      <Img className="flexCenter" src={profile} style={{zIndex:9, backgroundColor: "rgb(255 255 255 / 87%)", borderRadius: "45%"}}/>
                    </ImageWrapper>
                  </Col>
                </Row>
            </div>

        </Wrapper>

    )
}

export default Header