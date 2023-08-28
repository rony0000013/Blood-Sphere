import React, {useRef} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Appoinment.css';
import emailjs from '@emailjs/browser';


const Appoinment = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lj3i434', 'template_7wu66so', form.current, '3QIsLnhlPakxNCHEo')
        .then((result) => {
            console.log(result.text);
            navigate('/approved');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact" className="appoinment-wrapper mt-5 p-[5vw] m-[2vw]  w-[96vw]  border-[#f3c4fb] rounded-xl border-2">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="text-center text-4xl font-bold">Contact Us</h1>
                        </div>
                        <div className="appoinment-form">
                            <form ref={form} onSubmit={sendEmail}  className="row">
                                <Col md={6} lg={6}>
                                    <input type="text" data-aos="fade-right" name="user_name" placeholder="Enter Your Name" />
                                </Col>
                                <Col md={6} lg={6} >
                                    <input data-aos="fade-left" type="email" name="user_email" placeholder="Enter Your Email" />
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea data-aos="fade-up" name="message" id="" cols="30" rows="10" placeholder="Enter The Message In Brief"></textarea>
                                </Col>
                                <div className="text-center" data-aos="fade-up" >
                                    <button value="Send" type="submit" className="form-btn  w-full" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;