import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'reactstrap';
import commercial_gas_station from '../../images/commercial_gas_station.jpg';
import industrial from '../../images/industrial.jpg';
import apartment from '../../images/residential_apartment_long_branch.jpg';
import electric_vehicle from '../../images/electric_vehicle_charger.jpg';




const Services = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <h3 className="pe-header-secondary">Services</h3>
        {/* Start Commercial */}
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <img src={commercial_gas_station} width="100%"></img>
            </div>
            <h2 className="pe-header-secondary"> Commercial</h2>
            <p>
              Quality commercial services with proper licensing and insurance. These items below are just a sampling of the work we perform.
            </p>
            <Row>
              <Col>
                <ul>
                  <li>
                    New ​Retail and Remodels
                  </li>
                  <li>
                    Office Buildings
                  </li>
                  <li>
                    Warehouse
                  </li>
                  <li>
                    Distribution Centers
                  </li>
                  <li>
                    Lighting Systems
                  </li>
                  <li>
                    Re-Fixture
                  </li>
                  <li>
                    Re-Ballasting
                  </li>
                  <li>
                    Re-Lamping
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Exit and Emergency Systems
                  </li>
                  <li>
                    Utility Services
                  </li>
                  <li>
                    Code Corrections
                  </li>
                  <li>
                    Power Drops
                  </li>
                  <li>
                    Commercial Kitchen Equipment
                  </li>
                  <li>
                    Gas Stations
                  </li>
                  <li>
                    Hazardous Classified Locations
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* End Commercial */}
          {/* Start Residential  */}
          <Col>
            <div style={{ textAlign: "center" }}>
              <img src={apartment} width="100%"></img>
            </div>
            <h2 className="pe-header-secondary"> Residential</h2>
            <p>
              From regular service calls, to new constructions, and complete rewiring, we are proud to help our local homeowners and developers. We earn every job by respecting your time and property.
            </p>
            <Row>
              <Col>
                <ul>
                  <li>
                    Service Upgrades
                  </li>
                  <li>
                    New Construction
                  </li>
                  <li>
                    Back-Up Generators
                  </li>
                  <li>
                    Surge Protectors
                  </li>
                  <li>
                    Basement Remodels
                  </li>
                  <li>
                    Pools & SPA
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Home Renovations & Additions
                  </li>
                  <li>
                    Attic Fan Installation
                  </li>
                  <li>
                    Smoke Detectors
                  </li>
                  <li>
                    Emergency Responder Radio Coverage System
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* End Residential */}
        </Row>
        <Row>
          {/* Start Industrial */}
          <Col>
            <div style={{ textAlign: "center" }}>
              <img src={industrial} width="100%"></img>
            </div>
            <h2 className="pe-header-secondary"> Industrial</h2>
            <p>
              From new installations to diagnosing power issues, we can perform your industral electric work.
            </p>
            <Row>
              <Col>
                <ul>
                  <li>
                    Motor Hook-Up
                  </li>
                  <li>
                    Motor Controls
                  </li>
                  <li>
                    Transformers
                  </li>
                  <li>
                    Cable Tray
                  </li>
                  <li>
                    Water Pump
                  </li>
                  <li>
                    AC Speed Drivers
                  </li>
                  <li>
                    Stand-By Generators
                  </li>
                  <li>
                    Air Compressor
                  </li>
                  <li>
                    Hazardous Classified Locations
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Machine Tools
                  </li>
                  <li>
                    Cooling and Chilled Water
                  </li>
                  <li>
                    Electric Arc Furnace
                  </li>
                  <li>
                    Electric Ovens
                  </li>
                  <li>
                    Press Machines
                  </li>
                  <li>
                    Lighting Control Systems
                  </li>
                  <li>
                    480, 240, 208 Volt Distribution
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* End Industrial */}

          {/* Start Electric Charging*/}
          <Col>
            <div style={{ textAlign: "center" }}>
              <img src={electric_vehicle} width="100%"></img>
            </div>
            <h2 className="pe-header-secondary">Electric Vehicle Chargers</h2>
            <p>
              We are experienced in electric vehicle charger installations. A dedicated charging station at your home or business can help you save time and money compared to a commercial charging station.
            </p>
            <Row>
              <Col>
                <ul>
                  <li>
                    New Construction
                  </li>
                  <li>
                    Existing Homes and Garages
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Commercial Parking Lots
                  </li>
                  <li>
                    Apartment and Industrial Complexes
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* End Electric Charging */}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Services;