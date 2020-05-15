import React from "react"
import styled from "styled-components"

const Section = styled.section`
  max-width: 600px;
  padding: 4rem 3rem 5rem;

  p {
    margin: 0;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 38px;
  }
`

const WhoAreWe = () => (
  <Section className="text-center p-6 container">
    <h2 className="text-uppercase display-5">Quem somos</h2>
    <p className="lead">
      A Alluminy é uma empresa que atua há mais de 15 anos no mercado de
      fabricação e instalação de esquadrias de alumínio sob medida, e atende
      projetos dos mais variados tipos, que incluem edifícios residenciais,
      comerciais, industriais, além de residências de alto e médio padrão,
      clubes, academias, entre outros.
    </p>
    <hr className="my-5 border-light" />
    <p className="lead">
      Trabalhamos com uma ampla variedade de linhas de alumínio, como Master,
      Mega, Suprema, Inova, Gold, Única, e não só atuamos com portas e janelas,
      também atendemos projetos especiais como fachadas glazing, cortina, guarda
      corpos e brises.
    </p>
  </Section>
)

export default WhoAreWe
