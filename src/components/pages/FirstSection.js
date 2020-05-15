import React from "react"
import styled from "styled-components"

import { devices } from "../../styles/devices"
import ActionButton from "../ActionButton"

import banner from "../../images/banner-1.jpg"

const Section = styled.section`
  height: calc(100vh - 76px);
  min-height: 400px;
  color: #fff;
  background-image: url("${banner}");
  background-position: center;
  box-shadow: inset 0 980px 350px rgba(33, 71, 101, 0.78);

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
