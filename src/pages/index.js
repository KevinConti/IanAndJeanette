import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/Images/Images"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Images />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
