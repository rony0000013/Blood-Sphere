import { Container, Row } from "react-bootstrap";
import { FakeFeatures } from "../../FakeData/Features";
import Features from "../../Pages/Home/Features/Features";
import '../../Pages/Home/Features/Features.css';

const Feature = () => {
    return (
        <section data-aos="fade-up" id="features" className="feature-wrapper bg-[#FFD9C0]">
            <h1 className="text-center text-4xl font-bold mb-2 md:mt-[5vh]">Features</h1>
            <br />
            <Container>
                <Row className="g-3">
                        {
                            FakeFeatures.map(feature => (
                                <Features key={feature.id} feature={feature}></Features>
                            ))
                        }
                </Row>
            </Container>
        </section>
    );
};

export default Feature;