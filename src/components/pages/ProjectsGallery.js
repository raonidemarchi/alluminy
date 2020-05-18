import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Section = styled.section`
  margin: 4rem 0;
`

const SectionContainer = styled(Container)`
  max-width: 1600px;
`

const Title = styled.h3`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 1rem;
`

const SectionRow = styled(Row)`
  margin: 6rem 0;
  align-items: center;

  @media ${devices.sm} {
    margin: 4rem 0;
  }
`

const WhoAreWe = () => (
  <Section className="bg-light pb-4">
    <SectionContainer fluid></SectionContainer>
  </Section>
)

export default WhoAreWe
