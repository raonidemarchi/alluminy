import React from "react"
import { PrimaryButton } from "./ActionButtonStyles"

const ActionButton = ({ children = "", className = "" }) => (
  <PrimaryButton className={className}>{children}</PrimaryButton>
)

export default ActionButton
