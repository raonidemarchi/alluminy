import React from "react"
import { Modal, ListGroup } from "react-bootstrap"
import styled from "styled-components"

import { ModalConsumer } from "./contexts/ModalContext"
import {
  alluminyPhone,
  alluminyWhatsApp,
  alluminyEmail,
  getWhatsAppApi,
} from "../constants"

const ModalContent = styled(Modal)`
  .modal-content {
    border: none;
  }
`

const ListItem = styled.a`
  display: flex;
  padding: 1.6rem 0;
  align-items: center;
`

const IconContainer = styled.div`
  width: 80px;
  text-align: center;

  i {
    font-size: 1.6rem;

    &:before {
      background: linear-gradient(to bottom, #4bdfd8, #3a9fe0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const CaretContainer = styled.div`
  width: 44px;
  text-align: center;
  font-size: 1.2rem;
  color: #ddd;
`

const ActionModal = () => (
  <ModalConsumer>
    {({ show, toggleModal }) => (
      <ModalContent show={show} onHide={toggleModal} centered>
        <Modal.Header className="border-0" closeButton>
          <strong className="modal-title text-secondary">
            Entre em contato
          </strong>
        </Modal.Header>
        <Modal.Body className="p-0 pb-1">
          <ListGroup>
            <ListItem
              href={getWhatsAppApi(alluminyWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action border-top-0 border-right-0 border-left-0 border-light"
            >
              <IconContainer>
                <i className="fab fa-whatsapp" />
              </IconContainer>
              <div className="media-body">
                <h5 className="mt-0 font-weight-bold">WhatsApp</h5>
                <p className="text-muted small mb-0">
                  Inicie uma conversa no WhatsApp com um de nossos especilistas.
                </p>
              </div>
              <CaretContainer>
                <i className="fas fa-angle-right" />
              </CaretContainer>
            </ListItem>
            <ListItem
              href={`mailto:${alluminyEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action border-top-0 border-right-0 border-left-0 border-light"
            >
              <IconContainer>
                <i className="far fa-envelope" />
              </IconContainer>
              <div className="media-body">
                <h5 className="mt-0 font-weight-bold">E-mail</h5>
                <p className="text-muted small mb-0">
                  Envie um e-mail para nós e te responderemos em breve.
                </p>
              </div>
              <CaretContainer>
                <i className="fas fa-angle-right" />
              </CaretContainer>
            </ListItem>
            <ListItem
              href={`tel:${alluminyPhone}`}
              className="list-group-item list-group-item-action border-0"
            >
              <IconContainer>
                <i className="fas fa-headset" />
              </IconContainer>
              <div className="media-body">
                <h5 className="mt-0 font-weight-bold">Telefone</h5>
                <p className="text-muted small mb-0">
                  Ligue para nós, um de nossos especialistas irá te atender.{" "}
                </p>
              </div>
              <CaretContainer>
                <i className="fas fa-angle-right" />
              </CaretContainer>
            </ListItem>
          </ListGroup>
        </Modal.Body>
      </ModalContent>
    )}
  </ModalConsumer>
)

export default ActionModal
