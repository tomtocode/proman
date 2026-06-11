import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'reactstrap';
import { Portfolio } from '../Portfolio';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import Carousel from '../SupportComponents/Carousel';


const Home = props => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: "8px", paddingBottom: "24px" }}>
        <Row style={{ marginBottom: "12px" }}>
          <Col xs="12">
            <div style={{
              background: "linear-gradient(135deg, #fff7f1 0%, #ffffff 100%)",
              border: "1px solid #f2e3d7",
              borderRadius: "16px",
              padding: "16px 16px 8px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
              marginBottom: "8px"
            }}>
              <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                <h4 className="pe-h1" style={{ textAlign: "center", color: "#2f2f2f", marginBottom: "14px", lineHeight: 1.3, fontSize: "1.8rem" }}>
                  Reliable Electrical Solutions for Homes, Businesses, and Industrial Projects
                </h4>
                <p className="pe-paragraph" style={{ textAlign: "center", fontWeight: "600", color: "#ef5611", marginBottom: "16px" }}>
                  Ask Us About Our EV Charger Installation Services!
                </p>
                <p style={{ textAlign: "center", lineHeight: 1.8, margin: "0 auto 20px auto", color: "#555" }}>
                  From quick repairs to large-scale commercial and industrial projects, Proman Electric delivers dependable service backed by 30+ years of hands-on expertise. Fully licensed and insured, with founder Roman personally overseeing every job. We serve homeowners, apartment developments, retail, manufacturing, warehousing, EV charging installations, and more.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                  <a href="tel:732-851-4822" style={{ backgroundColor: "#ef5611", color: "white", padding: "10px 18px", borderRadius: "999px", textDecoration: "none", fontWeight: "600" }}>Call Now</a>
                  <a href="mailto:promanelectric@gmail.com" style={{ backgroundColor: "white", color: "#ef5611", border: "1px solid #ef5611", padding: "10px 18px", borderRadius: "999px", textDecoration: "none", fontWeight: "600" }}>Email Us</a>
                </div>
              </div>
              <div style={{ marginTop: "8px" }}>
                <Portfolio compact />
              </div>
            </div>
          </Col>
          {/* TODO Add picture of NJ map */}
          {/* TODO List of Towns we serve for SEO. */}
        </Row>
        <div style={{ paddingBottom: "100px" }}>

        </div>

        {/* <CarouselProvider
          totalSlides={3}
          naturalSlideWidth={500}
          naturalSlideHeight={600}
          infinite
        >
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          <Slider>
            <Slide index={0}><img src={apartment} wdth="500px" /></Slide>
            <Slide index={1}><img src={logo} /></Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>

        </CarouselProvider> */}
      </Container>
      <Footer></Footer>


      {/* <p className="pe-paragraph">
        The market is full of many electrical contractors but choosing the best service provider 
        continues to be a challenge for most businesses and home owners. We are a licensed electrical 
        contractor with over 20 years of experience in providing electrical services to distinguished 
        general contractors, commercial, residential, and industrial clients in New Jersey. The high 
        level of value we provide clients along with our professional integrity has made us a popular 
        firm to work with. 
      </p> */}
    </>
  );
};

export default Home;