import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import firstProject from "../../images/project-1.jpg"

const RightImg = styled.div`
  padding-top: 56.25%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
  margin-top: -96px;
`

const WhoAreWe = () => (
  <section className="bg-light my-5 py-5">
    <div className="bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <RightImg src={firstProject}></RightImg>
          </Col>

          <Col md={6}>
            <h3>RESIDENCIAIS</h3>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
)

export default WhoAreWe
