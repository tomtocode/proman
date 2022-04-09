import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'reactstrap';
import {Portfolio} from '../Portfolio';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from '../SupportComponents/Carousel';


const Home = props => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          {/* TODO Add picture of NJ map */}
          {/* TODO List of Towns we serve for SEO. */}
          <h4 className="pe-h1" style={{ textAlign: "center", color: "dimgrey"}}>
            New Jersey's Best Choice For Commercial, Residential and Industrial Electric Services
          </h4>
          <p className="pe-paragraph pe-color" style={{textAlign:"center", fontWeight: "bold"}}>Ask Us About Our EV Charger Installation Services!</p>
          <p>
            Fully Licensed and Insured because protecting our customers is the top priority.
            Our founder Roman has been in the electical trade for 30+ years and continues to manage
            each project. Our portfolio consists of apartment developments, retail stores,
            industrial
            facilities in manufacturing and warehousing, EV charging stations, as well as local homeowners in need of reliable work at a reasonable price.
          </p>
        </Row>
        <Portfolio />
        <div style={{paddingBottom:"100px"}}>

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