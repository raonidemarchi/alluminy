import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"

import Head from "./Head"
import Header from "./Header"
import ActionButtonFooter from "./ActionButtonFooter"
import { devices } from "../styles/devices"

const Main = styled.main`
  margin-top: 76px;

  @media ${devices.small} {
    margin-top: 56px;
  }
`

const Layout = ({ children }) => (
  <>
    <Head />
    <Header />
    <Main>{children}</Main>
    <ActionButtonFooter />
    <footer></footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
