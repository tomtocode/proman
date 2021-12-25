import logo from '../../images/logo.png';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <>
            <div className="pe-paragraph pe-header">
                <Container>
                    <Row>
                        <Col xs="3" className="ml-0 mr-0 px-0">
                            <img src={logo} width="100%" className="pe-app-logo" alt="logo" />
                        </Col>
                        <Col className="ml-0 mr-0 px-0">
                            <NavBar />
                        </Col>
                    </Row>
                    <h5 className="pe-paragraph" style={{ textAlign: "center", color: "DimGrey" }}>
                        Serving New Jersey Since 2011 - (732) 851-4822 - <a className="pe-link" href="mailto:promanelectric@gmail.com">promanelectric@gmail.com</a> - License # 16500
                    </h5>
                </Container>
                <hr className="pe-hr" />
            </div>
        </>
    );
};

export default Header;