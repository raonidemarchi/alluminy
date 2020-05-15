import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/pages/Banner"
import WhoAreWe from "../components/pages/WhoAreWe"
import Projects from "../components/pages/Projects"

const IndexPage = () => (
  <Layout>
    <Banner />
    <WhoAreWe />
    {/* <Projects /> */}
  </Layout>
)

export default IndexPage
