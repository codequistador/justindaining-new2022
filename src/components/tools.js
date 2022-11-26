import React from "react"

import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"

const Tool = styled.p`
  margin: 0;
`

const Tools = () => {
  const data = useStaticQuery(graphql`
    query ToolsQuery {
      allContentJson {
        edges {
          node {
            tools
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentJson.edges.map(item =>
        item.node.tools.map((tool, key) => <Tool key={key}>{tool}</Tool>)
      )}
    </div>
  )
}

export default Tools
