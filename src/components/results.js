import React from "react"

import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"

const Result = styled.div`
  margin-bottom: 40px;
`

const ResultHeading = styled.h3`
  margin: 0;
`

const ResultContent = styled.p`
  margin-top: 0;
`

const Results = () => {
  const data = useStaticQuery(graphql`
    query ResultsQuery {
      allContentJson {
        edges {
          node {
            results {
              site_name
              url
              tools
              notes
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentJson.edges.map(item =>
        item.node.results.map((result, key) => (
          <Result>
            <ResultHeading>{result.site_name}</ResultHeading>
            <ResultContent>
              {result.tools}
              <br />
              {result.notes !== "" && (
                <span>
                  {result.notes}
                  <br />
                </span>
              )}
              {result.url !== "" && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://${result.url}`}
                >
                  {result.url}
                </a>
              )}
            </ResultContent>
          </Result>
        ))
      )}
    </div>
  )
}

export default Results
