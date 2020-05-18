import React from "react"
import styled from "styled-components"

const Section = styled.section`
  max-width: 600px;
  padding: 2rem 2rem 5rem;

  p {
    margin: 0;
    font-weight: 300;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 38px;
  }
`

const OurAdvantages = () => (
  <Section className="text-center container">
    <h2 className="text-uppercase display-5">Nossos Diferenciais</h2>
    <p className="lead text-muted">
      Fazemos tudo com atenção aos detalhes, desde a fabricação e instalação ao
      acabamento.
    </p>
  </Section>
)

export default OurAdvantages
