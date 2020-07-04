import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

import {
  alluminyPhone,
  alluminyWhatsApp,
  alluminyGoogleMapsAddress,
  alluminyEmail,
  alluminyFacebook,
  alluminyInstagram,
  getWhatsAppApi,
} from "../constants"
import { getCurrentYear } from "../helpers/date"
import logo from "../images/logo-text.jpg"

const Icon = styled.i`
  margin-right: 2px;
`

const Footer = ({ className }) => (
  <footer
    className={`${className} mt-5 px-3 container text-center text-lg-left`}
  >
    <div className="py-4 pt-md-5 border-top">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <img
            className="mb-5"
            src={logo}
            alt="Alluminy Esquadrias de Alumínio - Sua obra merece"
            height="90"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="h6">Endereço</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href={alluminyGoogleMapsAddress}
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
              <a className="text-muted" href={`tel:${alluminyPhone}`}>
                {alluminyPhone}
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
                href={getWhatsAppApi(alluminyWhatsApp)}
              >
                {alluminyWhatsApp}
              </a>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5 className="h6 mt-2 mt-md-0">E-mail</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${alluminyEmail}`}
              >
                {alluminyEmail}
              </a>
            </li>
          </ul>
          <h5 className="h6 mt-4">Redes Sociais</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href={alluminyFacebook}
              >
                <Icon className="fab fa-facebook-square" /> Facebook
              </a>
            </li>
            <li>
              <a
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
                href={alluminyInstagram}
              >
                <Icon className="fab fa-instagram-square" /> Instagram
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

Footer.defaultProps = {
  className: "",
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
