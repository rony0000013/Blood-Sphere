import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../Images/BLOODSPHERE-01.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-bg p-2">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget ml-10" data-aos="fade-up">
                            <div className="widget-title">
                                <h2>Pages</h2>
                            </div>
                            <div className="widget-content">
                                {/* <NavLink className="footer-link">For Patients</NavLink> */}
                                {/* <NavLink className="footer-link">FAQ's</NavLink> */}
                                <NavLink href="#about" className="footer-link " >About</NavLink>
                                <NavLink href="#features" className="footer-link">Features</NavLink>
                                <NavLink href="#contact" className="footer-link">Contact Us</NavLink>
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
                                <NavLink href="https://github.com/rony0000013" className="footer-link">Rounak Sen</NavLink>
                                <NavLink href="https://github.com/Soumyajit2825" className="footer-link">Soumyajit Mondal</NavLink>
                                <NavLink href="https://github.com/Koustavjr" className="footer-link">Koustav Chatterjee</NavLink>
                                <NavLink href="https://github.com/rohit32999" className="footer-link">Rohit Chakrabarti</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget w-[100px] h-[10px] ml-6" data-aos="fade-up">
                            <Link to="/home" className='list-item text-decoration-none'>
                                <img className="logo rounded" src={logo} alt="BloodSphere" />
                            </Link>
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