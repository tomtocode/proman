import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <>
            <div className="pe-paragraph pe-header" style={{ backgroundColor: "#282828", padding: "24px 0 14px" }}>
                <Container>
                    <Row>
                        <Col>
                            <p className="pe-paragraph" style={{ textAlign: "center", color: "#f5f5f5", fontWeight: "600", fontSize: "0.95rem", paddingBottom: "6px", marginBottom: "0px", lineHeight: 1.7 }}>
                                Established 2010 | NJ License #16105 | <a style={{ color: "#ef5611", textDecoration: "none" }} href="tel:732-851-4822">(732) 851-4822</a> | <a style={{ color: "#ef5611", textDecoration: "none" }} href="mailto:promanelectric@gmail.com">promanelectric@gmail.com</a>
                            </p>
                            <p style={{ textAlign: "center", color: "#cfcfcf", marginTop: "6px", marginBottom: "0", fontSize: "0.9rem" }}>
                                &copy; PROMAN Electric LLC, All Rights Reserved
                            </p>
                        </Col>
                    </Row>
                </Container>
                <hr className="pe-hr" style={{ marginTop: "16px", marginBottom: "0" }} />
            </div>
        </>
    );
};

export default Footer;