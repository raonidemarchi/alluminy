import React from "react"
import ActionButton from "../ActionButton/ActionButton"
import { Link, Toggler } from "./HeaderStyles"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Alluminy
        </a>
        <Toggler
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Toggler>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link py-3 py-md-0 px-3" href="#">
                Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-3 py-md-0 px-3" href="#">
                Diferenciais
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-3 py-md-0 px-3" href="#">
                Obras
              </Link>
            </li>
            <ActionButton className="ml-4 mr-4 my-3 my-md-0 mr-md-0">
              Entre em contato
            </ActionButton>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
