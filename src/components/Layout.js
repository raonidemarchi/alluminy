import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"

import Head from "./Head"
import Header from "./Header"
import ActionButtonFooter from "./ActionButtonFooter"

const Main = styled.main`
  margin-top: 80px;
`

const Layout = ({ children }) => (
  <>
    <Head />
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
    <ActionButtonFooter />
    <footer></footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
