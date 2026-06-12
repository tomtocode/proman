import React from 'react';
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




const Portfolio = ({ compact = false }) => {

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
    <div style={{ maxWidth: compact ? '780px' : '100%', margin: '0 auto' }}>
      <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={5000}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={false}
        showNav={false}
        thumbnailPosition="bottom"
        renderItem={(item) => (
          <div style={{ width: '100%', height: compact ? '400px' : '680px', overflow: 'hidden', borderRadius: '12px' }}>
            <img
              src={item.original}
              alt="Proman Electric project"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
        renderThumbInner={(item) => (
          <div style={{ width: '100%', height: compact ? '70px' : '90px', overflow: 'hidden', borderRadius: '8px' }}>
            <img
              src={item.thumbnail}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default Portfolio;