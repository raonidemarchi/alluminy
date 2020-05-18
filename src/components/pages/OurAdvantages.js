import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Section = styled.section`
  max-width: 900px;
  padding: 2rem 2rem 5rem;

  p {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 38px;
  }
`

const Column = styled(Col)`
  padding: 0 3rem;
`

const Icon = styled.i`
  font-size: 3.2rem;
  margin-bottom: 1.4rem;

  &:before {
    background: linear-gradient(to bottom, #4bdfd8, #3a9fe0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const OurAdvantages = () => (
  <Section className="text-center container">
    <h2 className="text-uppercase display-5">Nossos Diferenciais</h2>
    <p className="lead text-muted">
      Fazemos tudo com atenção aos detalhes, desde a fabricação e instalação até
      o acabamento.
    </p>
    <Row>
      <Column sm={6} md={4}>
        <Icon className="fas fa-users" />
        <p>Profissionais experientes e qualificados</p>
      </Column>
      <Column sm={6} md={4}>
        <Icon className="fas fa-lightbulb" />
        <p>Planejamento das suas ideias</p>
      </Column>
      <Column sm={6} md={4}>
        <Icon className="fas fa-drafting-compass" />
        <p>Fabricação e instalação supervisionada</p>
      </Column>
      <Column sm={6} md={4}>
        <Icon className="fas fa-network-wired" />
        <p>Infraestrutura</p>
      </Column>
      <Column sm={6} md={4}>
        <Icon className="fas fa-clock" />
        <p>Entrega pontual</p>
      </Column>
      <Column sm={6} md={4}>
        <Icon className="fas fa-ruler" />
        <p>Desenhos e planos</p>
      </Column>
    </Row>
  </Section>
)

export default OurAdvantages
