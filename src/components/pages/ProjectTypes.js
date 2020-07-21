import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import firstProject from "../../images/project-types/project-1.webp"
import secondProject from "../../images/project-types/project-2.webp"
import thirdProject from "../../images/project-types/project-3.webp"
import fourthProject from "../../images/project-types/project-4.webp"
import fifthProject from "../../images/project-types/project-5.webp"

import firstProjectSm from "../../images/project-types/sm/project-1.webp"
import secondProjectSm from "../../images/project-types/sm/project-2.webp"
import thirdProjectSm from "../../images/project-types/sm/project-3.webp"
import fourthProjectSm from "../../images/project-types/sm/project-4.webp"
import fifthProjectSm from "../../images/project-types/sm/project-5.webp"

import { devices } from "../../constants"

const Section = styled.section`
  margin: 4rem 0 0;
`

const SectionContainer = styled(Container)`
  max-width: 1600px;
`

const Img = styled.div`
  padding-top: 74%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
  margin: ${({ mt }) => mt || 0}px -15px 0;

  @media ${devices.sm} {
    background-image: url('${({ src, srcSm }) => srcSm || src}');
    margin-left: -30px;
    margin-right: -30px;
  }
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
  <Section className="bg-light pb-4" id="projectTypes">
    <SectionContainer fluid>
      <SectionRow className="mb-5">
        <Col md={6}>
          <Img mt={-40} src={firstProject} srcSm={firstProjectSm} />
        </Col>
        <Col
          md={{ span: 5, offset: 1 }}
          lg={4}
          xl={3}
          className="text-center text-md-left py-4"
        >
          <Title>RESIDÊNCIAS</Title>
          <p className="lead">
            Trabalhamos na execução de residências de alto e médio padrão,
            fabricando e instalando portas, janelas, guarda corpo, portões, etc.
          </p>
        </Col>
      </SectionRow>
      <SectionRow>
        <Col
          md={{ span: 5 }}
          lg={{ span: 4, offset: 1 }}
          xl={{ span: 3, offset: 2 }}
          className="text-center text-md-left py-4 order-2"
        >
          <Title>EDIFÍCIOS RESIDENCIAIS</Title>
          <p className="lead">
            Temos grande experiência no mercado de edifícios residenciais,
            fabricando e instalando esquadrias de alumínio conforme a
            necessidade do projeto.
          </p>
        </Col>
        <Col
          md={{ span: 6, offset: 1 }}
          xl={{ offset: 1 }}
          className="order-md-2"
        >
          <Img src={secondProject} srcSm={secondProjectSm} />
        </Col>
      </SectionRow>
      <SectionRow className="mb-5">
        <Col md={6}>
          <Img src={thirdProject} srcSm={thirdProjectSm} />
        </Col>
        <Col
          md={{ span: 5, offset: 1 }}
          lg={4}
          xl={3}
          className="text-center text-md-left py-4"
        >
          <Title>EDIFÍCIOS COMERCIAIS</Title>
          <p className="lead">
            Além de trabalhar com as esquadrias tradicionais, somos
            especialistas na fabricação e instalação de fachadas, tais como
            glazing, cortina e brises.
          </p>
        </Col>
      </SectionRow>
      <SectionRow>
        <Col
          md={{ span: 5 }}
          lg={{ span: 4, offset: 1 }}
          xl={{ span: 3, offset: 2 }}
          className="text-center text-md-left py-4 order-2"
        >
          <Title>INSTALAÇÕES INDUSTRIAIS</Title>
          <p className="lead">
            Trabalhamos com uma ampla variedade de portas, portões e janelas,
            além de sermos especialistas na fabricação e instalação de fachadas,
            tais como glazing, cortina e brises.
          </p>
        </Col>
        <Col
          md={{ span: 6, offset: 1 }}
          xl={{ offset: 1 }}
          className="order-md-2"
        >
          <Img src={fourthProject} srcSm={fourthProjectSm} />
        </Col>
      </SectionRow>
      <SectionRow className="mb-5">
        <Col md={6}>
          <Img src={fifthProject} srcSm={fifthProjectSm} />
        </Col>
        <Col
          md={{ span: 5, offset: 1 }}
          lg={4}
          xl={3}
          className="text-center text-md-left py-4"
        >
          <Title>CLUBES E ACADEMIAS</Title>
          <p className="lead">
            Atendemos os mais diversos projetos de clubes e academias,
            realizando desde o fechamento de fachadas até a fabricação e
            instalação de divisórias sanitárias.
          </p>
        </Col>
      </SectionRow>
    </SectionContainer>
  </Section>
)

export default WhoAreWe
