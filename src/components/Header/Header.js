import logo from '../../images/logo.png';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <>
            <div className="pe-paragraph pe-header">
                <Container>
                    <Row>
                        <Col xs="2" className="ml-0 mr-0 px-0">
                            <img src={logo} width="100%" className="pe-app-logo" alt="logo" />
                        </Col>
                        <Col className="ml-0 mr-0 px-0">
                            <NavBar />
                        </Col>
                        <Col>
                            <p className="pe-paragraph" style={{ textAlign: "center", color: "grey", fontWeight:"bold", fontSize:"small" }}>
                            Since 2011 | License # 16500 <br></br>(732) 851-4822  | <a className="pe-link" href="mailto:promanelectric@gmail.com">promanelectric@gmail.com</a> 
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