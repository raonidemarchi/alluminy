import React, { createContext, useState } from "react"
import PropTypes from "prop-types"

const defaultState = {
  show: false,
  toggleModal: () => {},
}

const ModalContext = createContext(defaultState)
const ModalConsumer = ModalContext.Consumer

const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(defaultState.show)

  return (
    <ModalContext.Provider
      value={{
        show,
        toggleModal: () => setShow(!show),
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ModalProvider, ModalConsumer }
