import React from "react"
import { ModalProvider } from "./src/components/contexts/ModalContext"

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
)
