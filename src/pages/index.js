import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/pages/Banner"
import WhoWeAre from "../components/pages/WhoWeAre"
import ProjectTypes from "../components/pages/ProjectTypes"
import OurAdvantages from "../components/pages/OurAdvantages"
import ProjectsGallery from "../components/pages/ProjectsGallery"
import TitleAndButton from "../components/pages/TitleAndButton"
// import ActionModal from "../components/ActionModal"

const IndexPage = () => (
  <Layout>
    <Banner />
    <WhoWeAre />
    <ProjectTypes />
    <OurAdvantages />
    <ProjectsGallery />
    <TitleAndButton />
    {/* <ActionModal /> */}
  </Layout>
)

export default IndexPage
