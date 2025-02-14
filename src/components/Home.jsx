import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  return (
    <Container className="text-center my-5 px-5">
      <div className="py-5">
        <img src="https://cdn-icons-png.flaticon.com/512/552/552448.png" alt="logoimg" id="logoimg" />
      </div>
      <Navbar.Brand href="/" id="nomeHome">
        AppMeteo
      </Navbar.Brand>
      <Form
        className="d-flex mt-5 w-75 m-auto"
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
  );
}

export default Home;
