import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <div
    class="modal fade"
    id="billetModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="billetModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header border-0">
          <strong class="modal-title text-secondary">2ª via de boleto</strong>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body pt-0">
          <p class="small text-secondary">
            Você será redirecionado ao site do banco para realizar a emissão da
            2ª via do boleto.
          </p>

          <div class="list-group">
            <a
              href="https://www.santander.com.br/2-via-boleto"
              target="_blank"
              class="media d-flex align-items-center list-group-item list-group-item-action border-top-0 border-right-0 border-left-0 border-light py-3 px-2"
            >
              <img
                src="img/bank/santander.png"
                class="mr-4"
                alt="Santander"
                width="40"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-0 open-sans font-weight-bold">Santander</h5>
                <span class="text-muted small">
                  Emitir 2ª via de um boleto do Santander.
                </span>
              </div>
            </a>
            <a
              href="https://banco.bradesco/html/classic/produtos-servicos/mais-produtos-servicos/segunda-via-boleto.shtm"
              target="_blank"
              class="media d-flex align-items-center list-group-item list-group-item-action border-top-0 border-right-0 border-left-0 border-light py-3 px-2"
            >
              <img
                src="img/bank/bradesco.png"
                class="mr-4"
                alt="Bradesco"
                width="40"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-1 open-sans font-weight-bold">Bradesco</h5>
                <span class="text-muted small">
                  Emitir 2ª via de um boleto do Bradesco.
                </span>
              </div>
            </a>
            <a
              href="https://www.sicredi.com.br/segundaviaboleto/"
              target="_blank"
              class="media d-flex align-items-center list-group-item list-group-item-action border-0 pt-3 px-2"
            >
              <img
                src="img/bank/sicredi.png"
                class="mr-4"
                alt="Sicredi"
                width="40"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-1 open-sans font-weight-bold">Sicredi</h5>
                <span class="text-muted small">
                  Emitir 2ª via de um boleto do Sicredi.
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
