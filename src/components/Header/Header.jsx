import logo from '../../images/logo.png';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <>
            <div className="pe-paragraph pe-header" style={{ backgroundColor: "#282828", padding: "20px 0 10px" }}>
                <Container>
                    <Row className="align-items-center text-center">
                        <Col md="6" className="mb-3 mb-md-0">
                            <img src={logo} alt="logo" style={{ width: "100%", maxWidth: "220px", height: "auto" }} />
                        </Col>
                        <Col md="6">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <NavBar />
                            </div>
                        </Col>
                    </Row>

                </Container>
                <hr className="pe-hr" style={{ marginTop: "14px", marginBottom: "0" }} />
            </div>
        </>
    );
};

export default Header;