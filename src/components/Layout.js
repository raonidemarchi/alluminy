import React from "react"
import PropTypes from "prop-types"
import Head from "./Head"
import Header from "./Header/Header"

const Layout = ({ children }) => (
  <>
    <Head />
    <Header />
    <main>{children}</main>
    <footer></footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
