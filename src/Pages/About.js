import React from "react";
import Footer from "../Components/Footer";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../Styles/about.css";
import image1 from "../Assets/image1.jpg";
import wallpaper1 from '../Assets/wallpaper.png'
import wallpaper2 from '../Assets/wallpaper.png'
import wallpaper from "../Assets/wallpaper.png";

export const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="about1">
              <Row>
                <Col>
                  <Image src={image1} width="100%" height={450} />
                </Col>
                <Col>
                  <h2>About us</h2>
                  <p>
                    Welcome to Flexify — your all-in-one fitness companion
                    designed to make staying healthy easy, fun, and
                    personalized. Our goal is to help people of all ages build
                    consistent fitness habits, stay motivated, and track their
                    progress effectively — all from one place.
                  </p>
                  <p>
                    We combine AI-powered recommendations, customized workout
                    plans, and nutrition guidance to create a holistic fitness
                    experience. Whether you’re a beginner starting your journey
                    or a fitness enthusiast maintaining your routine, FitLife
                    adapts to your lifestyle.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
              <Container className="about2" fluid>
              <Row >
            
                <Col md={4} >
                <div className="vision" >
                    <h4>Our Vision</h4>
                    <p>We combine AI-powered recommendations, customized workout
                    plans, and nutrition guidance to create a holistic fitness
                    experience. Whether you’re a beginner starting your journey
                    or a fitness enthusiast maintaining your routine, FitLife
                    adapts to your lifestyle.</p>
                </div>
                  {/* <Image src={wallpaper} width={400}  thumbnail /> */}
                </Col>
                <Col md={4}>
                <div className="vision" >
                    <h4>Our Mission</h4>
                    <p>We combine AI-powered recommendations, customized workout
                    plans, and nutrition guidance to create a holistic fitness
                    experience. Whether you’re a beginner starting your journey
                    or a fitness enthusiast maintaining your routine, FitLife
                    adapts to your lifestyle.</p>
                </div>
                </Col>
                <Col md={4}>
                <div className="vision" >
                    <h4>Future Scope</h4>
                    <p>We combine AI-powered recommendations, customized workout
                    plans, and nutrition guidance to create a holistic fitness
                    experience. Whether you’re a beginner starting your journey
                    or a fitness enthusiast maintaining your routine, FitLife
                    adapts to your lifestyle.</p>
                </div>
                </Col>
              </Row>
              </Container>
      <Footer></Footer>
    </div>
  );
};
