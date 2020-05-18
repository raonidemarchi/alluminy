import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/pages/Banner"
import WhoAreWe from "../components/pages/WhoAreWe"
import Projects from "../components/pages/Projects"
import OurAdvantages from "../components/pages/OurAdvantages"

const IndexPage = () => (
  <Layout>
    <Banner />
    <WhoAreWe />
    <Projects />
    <OurAdvantages />
  </Layout>
)

export default IndexPage
