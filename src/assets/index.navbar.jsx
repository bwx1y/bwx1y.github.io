import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

import data from "./data";

const MyNavbar = () => {
  const goto = (e) => {
    e.preventDefault();
    const link = `#${e.target.innerText.toLowerCase()}`;
    const target = document.querySelector(link);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="lg" fixed="top" className="bg-opacity-75">
        <Container className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Scrollspy className="ms-auto navbar-nav text-center text-primary" items={["home", "skills", "project"]} currentClassName="active fw-bold text-light">
              <Nav.Link onClick={(e) => goto(e)}>Home</Nav.Link>
              <Nav.Link onClick={(e) => goto(e)}>Skills</Nav.Link>
              <NavDropdown title="Project" id="basic-nav-dropdown" onClick={(e) => goto(e)}>
                <NavDropdown.Item href="" disabled>
                  No data
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={data.MyLink.contact}>Contact</Nav.Link>
            </Scrollspy>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
