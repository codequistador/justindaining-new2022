import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Page = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  margin: 0 auto;
  max-width: 600px;
`

const Layout = ({ children }) => (
  <Page>
    <Global
      styles={css`
        h1 {
          font-size: 68px;
          line-height: 78px;
        }
        h2 {
          font-size: 42px;
          line-height: 52px;
        }
        h3 {
          font-size: 24px;
          line-height: 34px;
          font-weight: 300;
        }
        p {
          line-height: 28px;
        }
      `}
    />
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}</footer>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
