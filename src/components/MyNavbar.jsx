import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#" id="logo">
          AppMeteo
        </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Città" className="me-2" aria-label="Search" />
          <Button className="success">Cerca</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
