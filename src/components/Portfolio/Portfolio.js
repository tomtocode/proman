import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container} from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import apartment from '../../images/apartment_construction_2.jpg';
import electric_vehicle from '../../images/electric_vehicle_charger.jpg';
import high_voltage_panel from '../../images/high_voltage_panel.jpg';
import conduit from '../../images/conduit.jpg';



const Portfolio = () => {

    const images = [
      {
        original: apartment,
        thumbnail: apartment,
      },
      {
        original: electric_vehicle,
        thumbnail: electric_vehicle,
      },
      {
        original: conduit,
        thumbnail: conduit,
      },
    ];
  return (
    <>
    <Header></Header>
    <Container>
      <h3 className="pe-header-secondary">Portfolio</h3>
      <ImageGallery items={images} />
      <img ></img>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default Portfolio;