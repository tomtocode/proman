import logo from '../../images/logo.png';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <>
            <div className="pe-paragraph pe-header" style={{ backgroundColor: "#282828" }}>
                <Container>
                    <Row className="text-center">
                        <Col>
                            <img src={logo} alt="logo" style={{ width: "100%", maxWidth: "200px", height: "auto" }} />
                        </Col>
                        <Col>
                        <div>
                            <NavBar />
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="pe-paragraph" style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: "medium", verticalAlign: "bottom", paddingBottom: "0px", marginBottom: "0px" }}>
                                Established 2010 | NJ License #16105 | <a style={{ color: "#ef5611", whiteSpace:"nowrap" }} href="tel:732-851-4822">(732) 851-4822 </a> | <a style={{ color: "#ef5611" }} href="mailto:promanelectric@gmail.com">promanelectric@gmail.com</a>
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