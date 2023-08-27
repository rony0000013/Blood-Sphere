import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';
import './Banner.css';
import logo1 from '../../../Images/blood-donation-6035211_1280.png';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Better Life Through</h2>
                                <h1>Better Health</h1>
                                <p className="mb-xs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum facere odio dolor. Facilis fugiat earum, quaerat repudiandae tempora iure!</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Test Our Bot</button></Link>
                                    <button className='theme-btn bth-blank'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                                <img src={logo1}  alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;