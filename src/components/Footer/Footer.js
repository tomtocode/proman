import logo from '../../images/logo.png';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/NavBar';


const Footer = () => {
    return (
        <>
            <div className="pe-paragraph pe-header" style={{backgroundColor: "#282828"}}>
                <Container>
                    <Row>
                        <Col>
                            <p className="pe-paragraph" style={{ textAlign: "center", color: "white", fontWeight:"bold", fontSize:"small", verticalAlign: "bottom", paddingBottom: "0px", marginBottom: "0px"}}>
                            Established 2011 | NJ License #16105 | <a style={{color: "#ef5611"}} href="tel:732-851-4822">(732) 851-4822 </a> | <a style={{color: "#ef5611"}} href="mailto:promanelectric@gmail.com">promanelectric@gmail.com</a></p>
                            <p>&copy; PROMAN Electric LLC, All Rights Reserved</p>
                        </Col>
                    </Row>

                </Container>
                <hr className="pe-hr" />
            </div>
        </>
    );
};

export default Footer;