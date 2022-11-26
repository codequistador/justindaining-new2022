import React from "react"

import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"

const Bookend = styled.p`
  margin: 3em 0% 3em 0%;
  border-style: solid;
  border-color: rgba(51, 51, 51, 0.87);
  text-align: center;
  padding: 3% 3% 3% 3%;
  font-size: 19px;
  color: rgba(51, 51, 51, 1);
  border-width: 3px 0px;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allContentJson {
        edges {
          node {
            contact {
              email
              phone
              github
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentJson.edges.map(item =>
        item.node.contact.map((hitmeup, key) => (
          <Bookend>
            {hitmeup.email} | {hitmeup.phone} |&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`http://github.com/${hitmeup.github}`}
            >
              {hitmeup.github}
            </a>
          </Bookend>
        ))
      )}
    </div>
  )
}

export default Contact
