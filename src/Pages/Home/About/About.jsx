import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import drop from '../../../Images/blood-156063_1920.png';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section id="about" className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={drop} alt="donto" className="img-fluid donto" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Welcome to our Family</h1>
                                <p>At BloodSphere, We are committed to saving lives and connect compassionate donors with those in urgent need. With a strong emphasis on confidentiality and safety, we ensure a secure environment for donors and recipients alike. Join us in our mission to make a difference – every drop of blood donated brings us closer to a healthier, happier community. Together, we can create a lifeline of hope through the selfless act of giving.</p>
                                <a href='/page/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Happy Users</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>150</span>
                                    <span>+</span>
                                    <p>Hospitals</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>100</span>
                                    <span>+</span>
                                    <p>Blood Donation Camps</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>Team</span>
                                    <span> of</span>
                                    <p>4 members</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;