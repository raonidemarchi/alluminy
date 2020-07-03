import React, { useState } from "react"
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

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  function toggleMobileNavItems() {
    setExpanded(!expanded)
  }

  function hideMobileNavItems() {
    setExpanded(false)
  }

  return (
    <header id="home">
      <Navbar
        bg="white"
        expand="md"
        fixed="top"
        className="shadow-sm"
        expanded={expanded}
      >
        <Container>
          <div
            role="button"
            tabIndex={-1}
            onKeyPress={hideMobileNavItems}
            onClick={hideMobileNavItems}
          >
            <NavbarBrand className="navbar-brand" to="/#home">
              <img
                src={logo}
                height="40"
                className="d-inline-block align-top"
                alt="Alluminy Esquadrias de Alumínio"
              />
            </NavbarBrand>
          </div>
          <NavbarToggle
            aria-controls="navbarSupportedContent"
            onClick={toggleMobileNavItems}
          />
          <Navbar.Collapse
            className="justify-content-end"
            id="navbarSupportedContent"
          >
            <Nav className="align-items-center">
              <div
                role="button"
                tabIndex={-1}
                onKeyPress={hideMobileNavItems}
                onClick={hideMobileNavItems}
              >
                <NavLink
                  className="nav-link py-3 py-md-0 px-3"
                  to="/#projectTypes"
                >
                  Projetos
                </NavLink>
              </div>
              <div
                role="button"
                tabIndex={-1}
                onKeyPress={hideMobileNavItems}
                onClick={hideMobileNavItems}
              >
                <NavLink
                  onClick={hideMobileNavItems}
                  className="nav-link py-3 py-md-0 px-3"
                  to="/#ourAdvantages"
                >
                  Diferenciais
                </NavLink>
              </div>
              <div
                role="button"
                tabIndex={-1}
                onKeyPress={hideMobileNavItems}
                onClick={hideMobileNavItems}
              >
                <NavLink
                  onClick={hideMobileNavItems}
                  className="nav-link py-3 py-md-0 px-3"
                  to="/#ourProjects"
                >
                  Obras
                </NavLink>
              </div>
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
}

export default Header
