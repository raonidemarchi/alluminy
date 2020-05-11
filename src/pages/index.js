import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "../images/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi astronaut</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={image} alt="An astronaut" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
