import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom'

const navbarPrincipal = () => {
  return (
    <Navbar className="navBg" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Agendas"></Nav.Link>
            <Nav.Link as={Link} to="/Cuadernos"></Nav.Link>
            <Nav.Link as={Link} to="/Calendarios"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbarPrincipal;