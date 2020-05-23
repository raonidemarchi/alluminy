import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"
import styled from "styled-components"

const Btn = styled(Button)`
  font-size: 12px !important;
  text-transform: uppercase;
  font-weight: bold;
  background-image: linear-gradient(to right, #4bdfd8, #3a9fe0);
  border: 0;
  color: #fff;
  border-radius: 2px;
  height: ${({ height }) => height || "50px"};
  width: ${({ width }) => width || "172px"};

  &:hover {
    opacity: 0.84;
  }

  &:not(:disabled):not(.disabled):active:focus,
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(75, 223, 216, 0.5);
  }
`

const ActionButton = ({ children, className, height, width }) => (
  <Btn height={height} width={width} className={className}>
    {children}
  </Btn>
)

ActionButton.defaultProps = {
  className: "",
  height: "",
  width: "",
}

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default ActionButton
