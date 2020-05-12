import React from "react"
import { Button } from "./ActionButtonStyles"

const ActionButton = ({ children = "", className = "" }) => (
  <Button className={`btn ${className}`}>{children}</Button>
)

export default ActionButton
