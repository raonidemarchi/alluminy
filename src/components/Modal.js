import React from "react"
import styled from "styled-components"
import { Modal, ListGroup } from "react-bootstrap"

const ListItem = styled.a`
  display: flex;
  padding: 2rem 0;
  align-items: center;
  cursor: pointer;
`

const Icon = styled.i`
  font-size: 2.6rem;
  margin: 0 1.4rem;

  &:before {
    background: linear-gradient(to bottom, #4bdfd8, #3a9fe0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const ActionModal = () => (
  <Modal show={true}>
    <Modal.Header className="border-0">
      <strong className="modal-title text-secondary">Entre em contato</strong>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </Modal.Header>
    <Modal.Body className="p-0">
      <ListGroup>
        <ListItem
          href="https://www.santander.com.br/2-via-boleto"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action border-top-0 border-right-0 border-left-0 border-light py-4 px-2"
        >
          <Icon className="fab fa-whatsapp" />
          <div className="media-body">
            <h5 className="mt-0 mb-0 open-sans font-weight-bold">WhatsApp</h5>
            <span className="text-muted small">
              Inicie uma conversa no WhatsApp com um de nossos especilistas.
            </span>
          </div>
        </ListItem>
        <ListItem
          href="https://banco.bradesco/html/classic/produtos-servicos/mais-produtos-servicos/segunda-via-boleto.shtm"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action border-top-0 border-right-0 border-left-0 border-light py-3 px-2"
        >
          <Icon className="fas fa-inbox" />
          <div className="media-body">
            <h5 className="mt-0 mb-1 open-sans font-weight-bold">E-mail</h5>
            <span className="text-muted small">
              Envie um e-mail para nós e te responderemos em breve.
            </span>
          </div>
        </ListItem>
        <ListItem
          href="https://www.sicredi.com.br/segundaviaboleto/"
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action border-0 pt-3 px-2"
        >
          <Icon className="fas fa-headset" />
          <div className="media-body">
            <h5 className="mt-0 mb-1 open-sans font-weight-bold">Telefone</h5>
            <span className="text-muted small">
              Ligue para nós, um de nossos especialistas irá te atender.{" "}
            </span>
          </div>
        </ListItem>
      </ListGroup>
    </Modal.Body>
  </Modal>
)

export default ActionModal
