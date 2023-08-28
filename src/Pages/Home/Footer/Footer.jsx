import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../Images/BLOODSPHERE-01.jpeg';
const Footer = () => {
    return (
        <div className="footer-bg p-2">
            <Container>
                <Row className="text-black">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget ml-10" data-aos="fade-up">
                            <div className="widget-title">
                                <h2>Pages</h2>
                            </div>
                            <div className="widget-content">
                                {/* <NavLink className="footer-link">For Patients</NavLink> */}
                                {/* <NavLink className="footer-link">FAQ's</NavLink> */}
                                <NavLink className="footer-link " >About</NavLink>
                                <NavLink className="footer-link">Features</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget" data-aos="fade-up">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Team Name: Semicolon</NavLink>
                                <NavLink className="footer-link">College: Academy Of Technology</NavLink>
                                <NavLink className="footer-link">Phone: +91 6294096170</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget ml-10" data-aos="fade-up">
                            <div className="widget-title">
                                <h2>Our Team</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Rounak Sen</NavLink>
                                <NavLink className="footer-link">Soumyajit Mondal</NavLink>
                                <NavLink className="footer-link">Koustav Chatterjee</NavLink>
                                <NavLink className="footer-link">Rohit Chakrabarti</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget w-[100px] h-[10px] ml-6" data-aos="fade-up">
                            <img className="logo rounded" src={logo} alt="BloodSphere" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white" data-aos="fade-down">
                <p className='mb-0'>&copy; 2023 - <span className="developer">BloodSphere</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;