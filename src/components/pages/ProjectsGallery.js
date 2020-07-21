import React from "react"
import styled from "styled-components"

import { devices } from "../../constants"

import Project1 from "../../images/projects-gallery/project-1.webp"
import Project2 from "../../images/projects-gallery/project-2.webp"
import Project3 from "../../images/projects-gallery/project-3.webp"
import Project4 from "../../images/projects-gallery/project-4.webp"
import Project5 from "../../images/projects-gallery/project-5.webp"
import Project6 from "../../images/projects-gallery/project-6.webp"
import Project7 from "../../images/projects-gallery/project-7.webp"
import Project8 from "../../images/projects-gallery/project-8.webp"
import Project9 from "../../images/projects-gallery/project-9.webp"
import Project10 from "../../images/projects-gallery/project-10.webp"
import Project11 from "../../images/projects-gallery/project-11.webp"
import Project12 from "../../images/projects-gallery/project-12.webp"
import Project13 from "../../images/projects-gallery/project-13.webp"
import Project14 from "../../images/projects-gallery/project-14.webp"
import Project15 from "../../images/projects-gallery/project-15.webp"
import Project16 from "../../images/projects-gallery/project-16.webp"

import Project1Sm from "../../images/projects-gallery/sm/project-1.webp"
import Project2Sm from "../../images/projects-gallery/sm/project-2.webp"
import Project3Sm from "../../images/projects-gallery/sm/project-3.webp"
import Project4Sm from "../../images/projects-gallery/sm/project-4.webp"
import Project5Sm from "../../images/projects-gallery/sm/project-5.webp"
import Project6Sm from "../../images/projects-gallery/sm/project-6.webp"
import Project7Sm from "../../images/projects-gallery/sm/project-7.webp"
import Project8Sm from "../../images/projects-gallery/sm/project-8.webp"
import Project9Sm from "../../images/projects-gallery/sm/project-9.webp"
import Project10Sm from "../../images/projects-gallery/sm/project-10.webp"
import Project11Sm from "../../images/projects-gallery/sm/project-11.webp"
import Project12Sm from "../../images/projects-gallery/sm/project-12.webp"
import Project13Sm from "../../images/projects-gallery/sm/project-13.webp"
import Project14Sm from "../../images/projects-gallery/sm/project-14.webp"
import Project15Sm from "../../images/projects-gallery/sm/project-15.webp"
import Project16Sm from "../../images/projects-gallery/sm/project-16.webp"

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
    background-image: url('${({ src, srcSm }) => srcSm || src}');
    grid-row: span ${({ rowSpanSm, rowSpan }) => rowSpanSm || rowSpan || 1};
    grid-column: span ${({ colSpanSm, colSpan }) => colSpanSm || colSpan || 1};
  }

  @media ${devices.xs} {
    grid-column: span 1;
  }
`

const ProjectsGallery = () => (
  <Section className="bg-light py-3" id="ourProjects">
    <h2 className="text-center text-uppercase display-5">Nossas obras</h2>

    <Grid>
      <Img src={Project1} srcSm={Project1Sm} />
      <Img src={Project2} srcSm={Project2Sm} />
      <Img src={Project3} srcSm={Project3Sm} />
      <Img src={Project4} srcSm={Project4Sm} rowSpan={2} />
      <Img src={Project5} srcSm={Project5Sm} />
      <Img src={Project6} srcSm={Project6Sm} />
      <Img src={Project7} srcSm={Project7Sm} />
      <Img src={Project8} srcSm={Project8Sm} rowSpan={2} />
      <Img src={Project9} srcSm={Project9Sm} />
      <Img src={Project10} srcSm={Project10Sm} />
      <Img src={Project11} srcSm={Project11Sm} />
      <Img
        src={Project12}
        srcSm={Project12Sm}
        rowSpan={2}
        colSpan={2}
        rowSpanSm={1}
        colSpanSm={1}
      />
      <Img src={Project13} srcSm={Project13Sm} />
      <Img src={Project14} srcSm={Project14Sm} />
      <Img src={Project15} srcSm={Project15Sm} />
      <Img src={Project16} srcSm={Project16Sm} />
    </Grid>
  </Section>
)

export default ProjectsGallery
