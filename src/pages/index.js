import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/pages/Banner"
import WhoAreWe from "../components/pages/WhoAreWe"
import ProjectTypes from "../components/pages/ProjectTypes"
import OurAdvantages from "../components/pages/OurAdvantages"

const IndexPage = () => (
  <Layout>
    <Banner />
    <WhoAreWe />
    <ProjectTypes />
    <OurAdvantages />
  </Layout>
)

export default IndexPage
