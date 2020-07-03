import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

import ActionButton from "./ActionButton"
import { devices } from "../constants"
import { ModalConsumer } from "./contexts/ModalContext"

import logo from "../images/logo.png"

const NavbarBrand = styled(AnchorLink)`
  padding: 10px !important;

  @media ${devices.sm} {
    padding: 5px !important;
  }
`

const NavLink = styled(AnchorLink)`
  font-size: 14px;
  text-transform: uppercase;
`

const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
`

const Header = () => (
  <header id="home">
    <Navbar bg="white" expand="md" fixed="top" className="shadow-sm">
      <Container>
        <NavbarBrand className="navbar-brand" to="/#home">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="Alluminy Esquadrias de Alumínio"
          />
        </NavbarBrand>
        <NavbarToggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse
          className="justify-content-end"
          id="navbarSupportedContent"
        >
          <Nav className="align-items-center">
            <NavLink className="nav-link py-3 py-md-0 px-3" to="/#projectTypes">
              Projetos
            </NavLink>
            <NavLink
              className="nav-link py-3 py-md-0 px-3"
              to="/#ourAdvantages"
            >
              Diferenciais
            </NavLink>
            <NavLink className="nav-link py-3 py-md-0 px-3" to="/#ourProjects">
              Obras
            </NavLink>
            <ModalConsumer>
              {({ toggleModal }) => (
                <ActionButton
                  className="d-none d-md-block ml-4"
                  onClick={toggleModal}
                >
                  Entre em contato
                </ActionButton>
              )}
            </ModalConsumer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
