import React from "react"
import { ModalProvider } from "./src/components/contexts/ModalContext"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`

export const wrapRootElement = ({ element }) => (
  <>
    <ModalProvider>{element}</ModalProvider>
    <GlobalStyle />
  </>
)
