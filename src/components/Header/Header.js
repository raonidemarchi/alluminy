import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar fixed="top" className="shadow-sm bg-white">
      <div className="container">
        <Navbar.Brand>Alluminy</Navbar.Brand>
      </div>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
