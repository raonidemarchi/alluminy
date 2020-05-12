import React from "react"
import styles from "./ActionButtonStyles"

const ActionButton = ({ children, className }) => (
  <button className={`btn ${styles.button} ${className}`}>{children}</button>
)

export default ActionButton
