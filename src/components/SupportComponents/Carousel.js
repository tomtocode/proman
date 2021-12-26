import React from "react";
import ReactDOM from "react-dom";
import apartment from '../../images/apartment_construction_2.jpg';
import electric_vehicle from '../../images/electric_vehicle_charger.jpg';
import high_voltage_panel from '../../images/high_voltage_panel.jpg';
import conduit from '../../images/conduit.jpg';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [ 
          apartment,
          electric_vehicle,
          high_voltage_panel,
          conduit
      ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 5000);
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <img
          src={this.state.images[this.state.currentImage]}
          alt="PROMAN Electric Images"
          width ="70%"
          style={{minWidth: "200px"}}
        />
      </div>
    );
  }
}
export default Carousel;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Carousel />, rootElement);
// ReactDOM.render(<Carousel />;