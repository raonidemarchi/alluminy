import React from "react"
import ActionButton from "../ActionButton/ActionButton"
import styles from "./HeaderStyles"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          Alluminy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                PROJETOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DIFERENCIAIS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OBRAS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
