import React from "react"
import { Navbar, Container } from "react-bootstrap"

const Header = () => (
  <header>
    <Navbar fixed="top" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand>Alluminy</Navbar.Brand>
      </Container>
    </Navbar>
  </header>
)

export default Header
