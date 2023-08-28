import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <section id="contact" className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="flex justify-center text-2xl">Contact Us</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row">
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Enter Your Name" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" placeholder="Enter Your Email" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="phone" placeholder="Enter Your Phone" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Enter The Subject" />
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter The Message In Brief"></textarea>
                                </Col>
                                <Link to="/approved"><button className="theme-btn btn-fill form-btn mt-5">Submit</button></Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;