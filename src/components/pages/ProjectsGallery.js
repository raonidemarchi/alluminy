import React from "react"
import styled from "styled-components"

import { devices } from "../../constants"

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    margin: 4rem 0;
    font-size: 38px;
  }
`

const Grid = styled.div`
  max-width: 1600px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Img = styled.div`
  padding-top: 74%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
  background-color: blue;
  grid-row: span ${({ rowSpan }) => rowSpan || 1};
  grid-column: span ${({ colSpan }) => colSpan || 1};

  @media ${devices.sm} {
    grid-row: span ${({ rowSpanSm, rowSpan }) => rowSpanSm || rowSpan || 1};
    grid-column: span ${({ colSpanSm, colSpan }) => colSpanSm || colSpan || 1};
  }

  @media ${devices.xs} {
    grid-row: span 1;
    grid-column: span 1;
  }
`

const ProjectsGallery = () => (
  <Section className="bg-light py-3">
    <h2 className="text-center text-uppercase display-5">Nossas obras</h2>

    <Grid>
      <Img />
      <Img />
      <Img />
      <Img rowSpan={2} />
      <Img />
      <Img />
      <Img />
      <Img rowSpan={2} />
      <Img />
      <Img />
      <Img />
      <Img rowSpan={2} colSpan={2} rowSpanSm={1} colSpanSm={1} />
      <Img />
      <Img />
      <Img />
      <Img />
    </Grid>
  </Section>
)

export default ProjectsGallery
