import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import ActionButtonFooter from "./ActionButtonFooter"

import "bootstrap/dist/css/bootstrap.min.css"
import { devices } from "../constants"

const Body = styled.div`
  @media ${devices.sm} {
    padding-bottom: 60px;
  }
`

const Main = styled.main`
  margin-top: 76px;

  @media ${devices.sm} {
    margin-top: 56px;
  }
`

const Layout = ({ children }) => (
  <Body>
    <Head />
    <Header />
    <Main>{children}</Main>
    <Footer />
    <ActionButtonFooter />
  </Body>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
