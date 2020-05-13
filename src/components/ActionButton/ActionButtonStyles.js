import { Button } from "react-bootstrap"
import styled from "styled-components"

export const PrimaryButton = styled(Button)`
  padding: 14px 20px !important;
  font-size: 12px !important;
  text-transform: uppercase;
  font-weight: bold;
  background-image: linear-gradient(to right, #4bdfd8, #3a9fe0);
  border: 0;
  color: #fff;
  border-radius: 2px;

  &:hover {
    opacity: 0.84;
  }

  &:not(:disabled):not(.disabled):active:focus,
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(75, 223, 216, 0.5);
  }
`
