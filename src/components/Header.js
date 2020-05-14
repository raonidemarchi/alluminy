import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import styled from "styled-components"

import ActionButton from "./ActionButton"
import { devices } from "../styles/devices"

import logo from "../images/logo.png"

const Image = styled.img`
  @media ${devices.small} {
    height: 30px;
  }
`

const NavLink = styled(Nav.Link)`
  font-size: 14px;
  text-transform: uppercase;
`

const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
`

const Header = () => (
  <header>
    <Navbar bg="white" expand="md" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Alluminy Esquadrias de Alumínio"
          />
        </Navbar.Brand>
        <NavbarToggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse
          className="justify-content-end"
          id="navbarSupportedContent"
        >
          <Nav className="align-items-center">
            <NavLink className="nav-link py-3 py-md-0 px-3" href="#projetos">
              Projetos
            </NavLink>
            <NavLink
              className="nav-link py-3 py-md-0 px-3"
              href="#diferenciais"
            >
              Diferenciais
            </NavLink>
            <NavLink className="nav-link py-3 py-md-0 px-3" href="#obras">
              Obras
            </NavLink>
            <ActionButton className="d-none d-md-block ml-4">
              Entre em contato
            </ActionButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
