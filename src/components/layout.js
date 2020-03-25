import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="font-montserrat flex flex-col h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex-1" >   
        <main>{children}</main>
      </div>
      <footer className="container mx-auto my-6 px-4">
          © {new Date().getFullYear()}, Foody All Right Reserved
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout