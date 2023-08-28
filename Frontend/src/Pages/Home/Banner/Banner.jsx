import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import logo1 from "../../../Images/blood-donation-6035211_1280.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <>
            <section className="single-hero-slide text-black d-flex justify-content-center align-items-center pb-[10vh] pt-2 pl-4">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <Typewriter
                                    options={{
                                        strings: ["Better Life Through", "Better Health"],
                                        autoStart: true,
                                        loop: true,
                                        skipAddStyles: false,
                                        wrapperClassName: "text-[50px] font-bold font-sans",
                                        cursorClassName: "hidden",
                                    }}
                                />
                                <p className="mb-xs-5 text-black">
                                    BloodSphere is a non-profit organization that aims to connect blood donors with blood recipients. We are committed to saving lives and connect compassionate donors with those in urgent need. With a strong emphasis on confidentiality and safety, we ensure a secure environment for donors and recipients alike. Join us in our mission to make a difference – every drop of blood donated brings us closer to a healthier, happier community. Together, we can create a lifeline of hope through the selfless act of giving.
                                </p>
                                <div className="banner-btn m-sm-auto">
                                    <a href="https://t.me/blood_sphere_bot">
                                        <button className="btn btn-primary btn-lg hover:bg-white hover:text-black">
                                            Search For Blood
                                        </button>
                                    </a>{" "}
                                    <a href="https://t.me/blood_sphere_bot">
                                        <button className="btn btn-primary btn-lg hover:bg-white hover:text-black">
                                            Donate Blood
                                        </button>
                                    </a>{" "}
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right flex flex-row text-center text-lg-start mt-sm-5">
                                <img src={logo1} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Banner;
