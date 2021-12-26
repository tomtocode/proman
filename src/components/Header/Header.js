import logo from '../../images/logo.png';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <>
            <div className="pe-paragraph pe-header" style={{backgroundColor: "#282828"}}>
                <Container>
                    <Row>
                        <Col xs="2" className="ml-0 mr-0 px-0" style={{textAlign: "center"}}>
                            <img src={logo} width="100%" alt="logo" />
                        </Col>
                        <Col className="ml-0 mr-0 px-0">
                            <NavBar />
                        </Col>
                        <Col>
                            <p className="pe-paragraph" style={{ textAlign: "center", color: "white", fontWeight:"bold", fontSize:"small", verticalAlign: "bottom", paddingBottom: "0px", marginBottom: "0px"}}>
                            Established 2011 | NJ License #16105 <br></br><a style={{color: "#ef5611"}} href="tel:732-851-4822">(732) 851-4822 </a> | <a style={{color: "#ef5611"}} href="mailto:promanelectric@gmail.com">promanelectric@gmail.com</a> 
                            </p>
                        </Col>
                    </Row>

                </Container>
                <hr className="pe-hr" />
            </div>
        </>
    );
};

export default Header;