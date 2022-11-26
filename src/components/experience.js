import React from "react"

import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"

const Job = styled.div`
  margin-bottom: 40px;
`

const JobHeading = styled.h3`
  margin: 0;
`

const JobContent = styled.p`
  margin-top: 0;
`

const Experience = () => {
  const data = useStaticQuery(graphql`
    query ExperienceQuery {
      allContentJson {
        edges {
          node {
            experience {
              company
              time_frame
              position
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentJson.edges.map(item =>
        item.node.experience.map((job, key) => (
          <Job>
            <JobHeading>{job.company}</JobHeading>
            <JobContent>
              {job.time_frame}
              <br />
              {job.position}
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`http://${job.url}`}
              >
                {job.url}
              </a>
            </JobContent>
          </Job>
        ))
      )}
    </div>
  )
}

export default Experience
