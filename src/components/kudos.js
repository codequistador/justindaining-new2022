import React from "react"

import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"

const Kudo = styled.p`
  margin: 0 0 40px;
  &:before,
  &:after {
    content: '"';
  }
`

const Kudos = () => {
  const data = useStaticQuery(graphql`
    query KudosQuery {
      allContentJson {
        edges {
          node {
            kudos
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentJson.edges.map(item =>
        item.node.kudos.map((kudo, key) => <Kudo key={key}>{kudo}</Kudo>)
      )}
    </div>
  )
}

export default Kudos
