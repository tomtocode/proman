import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <>
      <Header></Header>
      <Container style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ textAlign: "center" }}>
          <h2 className="pe-header-secondary">About Us</h2>
          <p style={{ textAlign: "center" }}>
            Proman Electric is a licensed contractor that has been privileged to provide electrical services to many distinguished general contractors, commercial, residential, and industrial clients in New Jersey.
          </p>
          <div
            style={{
              border: "1px solid #ef5611",
              width: "100%",
              maxWidth: "900px",
              margin: "24px auto",
              padding: "20px",
              textAlign: "center"
            }}
          >
            <Row style={{ alignItems: "center" }}>
              <Col md="4" xs="12" style={{ marginBottom: "12px" }}>
                <h4 style={{ color: "#ef5611", marginBottom: "8px" }}>Office</h4>
                <p style={{ margin: 0 }}>402 State Hwy 79, Morganville, New Jersey, 07751</p>
              </Col>
              <Col md="4" xs="12" style={{ marginBottom: "12px" }}>
                <h4 style={{ color: "#ef5611", marginBottom: "8px" }}>Phone</h4>
                <p style={{ margin: 0 }}>+1 (732) 851-4822</p>
              </Col>
              <Col md="4" xs="12">
                <h4 style={{ color: "#ef5611", marginBottom: "8px" }}>Email</h4>
                <p style={{ margin: 0 }}>promanelectric@gmail.com</p>
              </Col>
            </Row>
          </div>
          <div>
            <h2 className="pe-header-secondary" style={{marginTop:"10px"}}>Directions</h2>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6151961251267!2d-74.24747458460548!3d40.37305597937007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cd6b09ce7d13%3A0x912d869fefae3394!2s402+Hwy+79%2C+Morganville%2C+NJ+07751!5e0!3m2!1sen!2s!4v1491751510175"
            title="Proman Electric location"
            width="80%"
            height="300px"
            scrolling="no"
            style={{ verticalAlign: "top", border: "0", textAlign: "Center", marginBottom: "50px" }}
            allowFullScreen="">
          </iframe>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default About;