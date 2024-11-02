import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container} from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import apartment from '../../images/apartment_construction_2.jpg';
import electric_vehicle from '../../images/electric_vehicle_charger.jpg';
import high_voltage_panel from '../../images/high_voltage_panel.jpg';
import apartment_construction from '../../images/apartment_construction.jpg';
import commercial_gas_station from '../../images/commercial_gas_station.jpg';
import industrial from '../../images/industrial.jpg';
// import conduit from '../../images/conduit.jpg';




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
      // {
      //   original: conduit,
      //   thumbnail: conduit,
      // },
      {
        original: high_voltage_panel,
        thumbnail: high_voltage_panel,
      },
      {
        original: apartment_construction,
        thumbnail: apartment_construction,
      },
      {
        original: commercial_gas_station,
        thumbnail: commercial_gas_station,
      },
      {
        original: industrial,
        thumbnail: industrial,
      },
    ];
  return (
    <>
    {/* <Header></Header> */}
    <Container>
      {/* <h3 className="pe-header-secondary">Portfolio</h3> */}
      <ImageGallery items={images} />
      <img ></img>
    </Container>
    {/* <Footer></Footer> */}
    </>
  );
};

export default Portfolio;