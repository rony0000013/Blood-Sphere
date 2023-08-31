import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./Features.css";

const Features = (props) => {
    const { title, description, img } = props.feature;
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <Col md={6} xl={4} lg={6} sm={12}>
                <div className="single-feature-box sm:m-5 m-2 bg-amber-950/10 shadow-2xl shadow-amber-950/50 bg-brown-400 rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-[5px] border-amber-950 text-[#482121]" data-aos="fade-right">
                    <div className="icon-box">
                        <img src={img} alt="" />
                    </div>

                    <h3 data-aos="zoom-out">{title}</h3>
                    <p data-aos="zoom-out">{description}</p>
                </div>
            </Col>
        </>
    );
};

export default Features;
