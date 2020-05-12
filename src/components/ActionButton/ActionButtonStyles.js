import styled from "styled-components"

export const Button = styled.button`
  padding: 14px 20px !important;
  font-size: 12px !important;
  text-transform: uppercase;
  font-weight: bold;
  background-image: linear-gradient(to right, #4bdfd8, #3a9fe0);
  border: 0;
  color: #fff;
  border-radius: 2px;

  &:hover {
    color: #fff;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(75, 223, 216, 0.5);
  }
`
