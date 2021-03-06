/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Anime from 'react-anime'
import Sidebar from "./sidebar"
import "../css/grid.css"
import "../css/main.css"

const Template = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
	<>
		<Sidebar siteTitle={data.site.siteMetadata.title} />
    <Anime opacity={[0, 1]} translateY={['3em', '1vh']} loop={false}>
		<main className='content' id='everything'>
			{children}
		</main>
    </Anime>
	</>
    )}
  />
)

Template.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Template
