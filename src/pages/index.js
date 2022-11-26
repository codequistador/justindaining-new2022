import React from "react"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Experience from "../components/experience"
import Kudos from "../components/kudos"
import Tools from "../components/tools"
import Results from "../components/results"
import Contact from "../components/contact"

const H1 = styled.h1`
  margin: 45px 0;
`

const H2 = styled.h2``

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`design systems`, `ui`, `ux`, `developer`, `technologist`]}
    />
    <Contact />
    <H1>Justin Daining</H1>
    <H2>Experience</H2>
    <Experience />
    <H2>Tools</H2>
    <Tools />
    <H2>Results</H2>
    <Results />
    <H2>Testimonials</H2>
    <Kudos />
    <Contact />
  </Layout>
)

export default IndexPage
