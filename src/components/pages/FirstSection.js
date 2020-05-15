import React from "react"
import styled from "styled-components"

import { devices } from "../../styles/devices"
import ActionButton from "../ActionButton"

const Section = styled.section`
  height: calc(100vh - 76px);
  min-height: 400px;
  color: #fff;
  font-weight: 100;

  h1 {
    text-transform: uppercase;
    font-size: 72px;

    @media ${devices.sm} {
      font-size: 48px;
    }
  }

  h2 {
    margin-bottom: 30px;
    font-size: 20px;
  }
`

const FirstSection = () => (
  <Section className="bg-dark d-flex justify-content-center align-items-center">
    <div className="text-center">
      <h1>Alluminy</h1>
      <h2>esquadrias de alumínio</h2>
      <ActionButton className="d-none d-md-inline">
        Entre em contato
      </ActionButton>
    </div>
  </Section>
)

export default FirstSection
