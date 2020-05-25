import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import ActionButtonFooter from "./ActionButtonFooter"

import "bootstrap/dist/css/bootstrap.min.css"
import { devices } from "../constants"

const Main = styled.main`
  margin-top: 76px;

  @media ${devices.sm} {
    margin-top: 56px;
  }
`

const PageFooter = styled(Footer)`
  @media ${devices.sm} {
    padding-bottom: 60px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <Main>{children}</Main>
      <PageFooter />
      <ActionButtonFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
