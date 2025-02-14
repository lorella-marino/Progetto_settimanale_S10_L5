import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  return (
    <Navbar expand="lg">
      <Container className="d-flex">
        <Navbar.Brand href="/" id="nome">
          AppMeteo
        </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
        <Form
          className="d-flex"
          onSubmit={() => {
            city && navigate(`/details/${city}`);
          }}
        >
          <Form.Control
            type="search"
            placeholder="Inserisci una città"
            className="me-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-label="Search"
          />
          <Button type="submit" className="success">
            Cerca
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
