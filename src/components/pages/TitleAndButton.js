import React from "react"
import styled from "styled-components"

import { ModalConsumer } from "../contexts/ModalContext"
import ActionButton from "../ActionButton"

const Section = styled.section`
  padding: 7rem 3rem;
`

const Title = styled.h3`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.5;
`

const TitleAndButton = () => (
  <Section className="text-center container">
    <Title className="text-uppercase display-5">
      Vamos construir seu sonho juntos.
    </Title>
    <ModalConsumer>
      {({ toggleModal }) => (
        <ActionButton
          className="mt-3 d-none d-md-inline-block"
          onClick={toggleModal}
        >
          Entre em contato
        </ActionButton>
      )}
    </ModalConsumer>
  </Section>
)

export default TitleAndButton
