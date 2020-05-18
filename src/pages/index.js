import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/pages/Banner"
import WhoWeAre from "../components/pages/WhoWeAre"
import ProjectTypes from "../components/pages/ProjectTypes"
import OurAdvantages from "../components/pages/OurAdvantages"

const IndexPage = () => (
  <Layout>
    <Banner />
    <WhoWeAre />
    <ProjectTypes />
    <OurAdvantages />
  </Layout>
)

export default IndexPage
