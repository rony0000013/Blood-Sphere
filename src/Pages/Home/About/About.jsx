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
        <section id="about" className="about-wrapper pr-4">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="flex justify-center">
                            <img style={{animation: "move-down 2s linear infinite", height: "80%", width: "70%"}} src={drop} alt="Blood" className="img-fluid donto mt-[10%]" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start text-lg" data-aos="zoom-in">
                                <h1 className="text-center text-4xl font-bold">Welcome to our Family</h1>
                                <p>At BloodSphere, We are committed to saving lives and connect compassionate donors with those in urgent need. With a strong emphasis on confidentiality and safety, we ensure a secure environment for donors and recipients alike. Join us in our mission to make a difference – every drop of blood donated brings us closer to a healthier, happier community. Together, we can create a lifeline of hope through the selfless act of giving.</p>
                                <a href='#about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec grid grid-rows-2 grid-cols-2" data-aos="fade-right">
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