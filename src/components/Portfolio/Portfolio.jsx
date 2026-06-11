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
import fireplace from '../../images/fireplace.jpeg';
import generac from '../../images/generac.jpg';
import generator from '../../images/generator.jpeg';
import meters from '../../images/meters.jpeg';
import truss from '../../images/truss.jpeg';




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
        original: high_voltage_panel,
        thumbnail: high_voltage_panel,
      },
      {
        original: apartment_construction,
        thumbnail: apartment_construction,
      },
      {
        original: fireplace,
        thumbnail: fireplace,
      },
      {
        original: generac,
        thumbnail: generac,
      },
      {
        original: generator,
        thumbnail: generator,
      },
      {
        original: meters,
        thumbnail: meters,
      },
      {
        original: truss,
        thumbnail: truss,
      },
      {
        original: commercial_gas_station,
        thumbnail: commercial_gas_station,
      },
       {
        original: industrial,
        thumbnail: industrial,
      }
    ];
  return (
    <>
    {/* <Header></Header> */}
    <Container>
      {/* <h3 className="pe-header-secondary">Portfolio</h3> */}
      <ImageGallery items={images} autoPlay={true}/>
      <img ></img>
    </Container>
    {/* <Footer></Footer> */}
    </>
  );
};

export default Portfolio;