import React from "react"
import styled from "styled-components"

import ActionButton from "../ActionButton"

const Section = styled.section`
  padding: 5rem 3rem;
`

const Title = styled.h3`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 1rem;
`

const TitleAndButton = () => (
  <Section className="text-center container">
    <Title className="text-uppercase display-5">
      Vamos construir seu sonho juntos.
    </Title>
    <ActionButton className="mt-3">Entre em contato</ActionButton>
  </Section>
)

export default TitleAndButton
