import React from "react"
import styled from "styled-components"

import ActionButton from "./ActionButton"
import { ModalConsumer } from "./contexts/ModalContext"

const Aside = styled.aside`
  box-shadow: 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`

const ActionButtonFooter = () => (
  <Aside className="d-md-none fixed-bottom">
    <ModalConsumer>
      {({ toggleModal }) => (
        <ActionButton
          className="rounded-0"
          width="100%"
          height="60px"
          onClick={toggleModal}
        >
          Entre em contato
        </ActionButton>
      )}
    </ModalConsumer>
  </Aside>
)

export default ActionButtonFooter
