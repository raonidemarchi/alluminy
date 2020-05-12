import React from "react"
import ActionButton from "../ActionButton/ActionButton"
import { Nav, Navbar, Container } from "react-bootstrap"
import { NavLink, NavbarToggle } from "./HeaderStyles"

const Header = () => (
  <header>
    <Navbar bg="white" expand="md" fixed="top" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">Alluminy</Navbar.Brand>
        <NavbarToggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse
          className="justify-content-end"
          id="navbarSupportedContent"
        >
          <Nav className="align-items-center">
            <NavLink className="nav-link py-3 py-md-0 px-3" href="#">
              Projetos
            </NavLink>
            <NavLink className="nav-link py-3 py-md-0 px-3" href="#">
              Diferenciais
            </NavLink>
            <NavLink className="nav-link py-3 py-md-0 px-3" href="#">
              Obras
            </NavLink>
            <ActionButton className="ml-4 mr-4 my-3 my-md-0 mr-md-0">
              Entre em contato
            </ActionButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
