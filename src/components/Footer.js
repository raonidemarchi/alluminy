import React from "react"
import { Row, Col } from "react-bootstrap"

import { getCurrentYear } from "../helpers/date"
import logo from "../images/logo.png"

const Footer = () => (
  <footer className="mt-5 px-3 container text-center text-lg-left">
    <div className="py-4 pt-md-5 border-top">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <img className="mb-5" src={logo} alt="" height="50" />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="h6">Endereço</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/r1vn7NtKVJD4JZxx5"
              >
                R. José Francisco Ceccon, 104
                <br />
                Parque das Nações
                <br />
                Indaiatuba - SP
              </a>
            </li>
          </ul>
          <h5 className="h6 mt-4">Telefone</h5>
          <ul className="list-unstyled">
            <li>
              <a className="text-muted" href="tel:(19) 3394-3654">
                (19) 3394-3654
              </a>
            </li>
          </ul>
          <h5 className="h6 mt-4">Whatsapp</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+5519992030454"
              >
                (19) 99203-0454
              </a>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="h6">E-mail</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:atendimento.alluminy@outlook.com"
              >
                atendimento.alluminy@outlook.com
              </a>
            </li>
          </ul>
          <h5 className="h6">Redes Sociais</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Alluminy-Esquadrias-de-Alum%C3%ADnio-1446937995598231/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/alluminyesquadrias/"
              >
                Instagram
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>

    <div className="border-top text-center small text-muted pt-3 pb-4">
      © {getCurrentYear()} Alluminy Esquadrias de Alumínios Ltda. Todos os
      direitos reservados.
    </div>
  </footer>
)

export default Footer
