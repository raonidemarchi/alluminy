import React from "react"
import styled from "styled-components"

import firstProject from "../../images/project-1.jpg"

const RightImg = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
`

const WhoAreWe = () => (
  <section className="bg-light py-5">
    <div></div>
    <RightImg src={firstProject}></RightImg>
  </section>
)

export default WhoAreWe
