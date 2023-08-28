import { Container, Row } from "react-bootstrap";
import { FakeFeatures } from "../../FakeData/Features";
import Features from "../../Pages/Home/Features/Features";
import '../../Pages/Home/Features/Features.css';

const Feature = () => {
    return (
        <section id="features" className="feature-wrapper">
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