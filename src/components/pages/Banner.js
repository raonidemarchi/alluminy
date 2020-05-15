import React from "react"
import styled from "styled-components"

import { devices } from "../../constants"
import ActionButton from "../ActionButton"

import banner from "../../images/banner-1.jpg"

const Section = styled.section`
  min-height: 400px;
  color: #fff;
  background-image: url("${banner}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &, & > div {
    height: calc(100vh - 76px);
  }

  & > div {
    background-color: rgba(0, 0, 0, 0.6);
  }

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

const Banner = () => (
  <Section>
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Alluminy</h1>
        <h2>esquadrias de alumínio</h2>
        <ActionButton className="d-none d-md-inline">
          Entre em contato
        </ActionButton>
      </div>
    </div>
  </Section>
)

export default Banner
