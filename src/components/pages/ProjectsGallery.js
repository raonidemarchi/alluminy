import React from "react"
import styled from "styled-components"

import { devices } from "../../constants"

import Project1 from "../../images/projects-gallery/project-1.jpg"
import Project2 from "../../images/projects-gallery/project-2.jpg"
import Project3 from "../../images/projects-gallery/project-3.jpg"
import Project4 from "../../images/projects-gallery/project-4.jpg"
import Project5 from "../../images/projects-gallery/project-5.jpg"
import Project6 from "../../images/projects-gallery/project-6.jpg"
import Project7 from "../../images/projects-gallery/project-7.jpg"
import Project8 from "../../images/projects-gallery/project-8.jpg"
import Project9 from "../../images/projects-gallery/project-9.jpg"
import Project10 from "../../images/projects-gallery/project-10.jpg"
import Project11 from "../../images/projects-gallery/project-11.jpg"
import Project12 from "../../images/projects-gallery/project-12.jpg"
import Project13 from "../../images/projects-gallery/project-13.jpg"
import Project14 from "../../images/projects-gallery/project-14.jpg"
import Project15 from "../../images/projects-gallery/project-15.jpg"
import Project16 from "../../images/projects-gallery/project-16.jpg"

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
  gap: 3px;
  margin: 0 auto;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.xs} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(1, 1fr);
  }
`

const Img = styled.div`
  padding-top: 74%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
  background-color: #e0e0e0;
  grid-row: span ${({ rowSpan }) => rowSpan || 1};
  grid-column: span ${({ colSpan }) => colSpan || 1};

  @media ${devices.sm} {
    grid-row: span ${({ rowSpanSm, rowSpan }) => rowSpanSm || rowSpan || 1};
    grid-column: span ${({ colSpanSm, colSpan }) => colSpanSm || colSpan || 1};
  }

  @media ${devices.xs} {
    grid-column: span 1;
  }
`

const ProjectsGallery = () => (
  <Section className="bg-light py-3">
    <h2 className="text-center text-uppercase display-5">Nossas obras</h2>

    <Grid>
      <Img src={Project1} />
      <Img src={Project2} />
      <Img src={Project3} />
      <Img src={Project4} rowSpan={2} />
      <Img src={Project5} />
      <Img src={Project6} />
      <Img src={Project7} />
      <Img src={Project8} rowSpan={2} />
      <Img src={Project9} />
      <Img src={Project10} />
      <Img src={Project11} />
      <Img
        src={Project12}
        rowSpan={2}
        colSpan={2}
        rowSpanSm={1}
        colSpanSm={1}
      />
      <Img src={Project13} />
      <Img src={Project14} />
      <Img src={Project15} />
      <Img src={Project16} />
    </Grid>
  </Section>
)

export default ProjectsGallery