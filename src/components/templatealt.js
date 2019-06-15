/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Sidebar from "./sidebar"
import "../css/grid.css"
import "../css/main.css"
import '../css/fade.css'

const TemplateAlt = ({ children }) => (
	<>
		<Sidebar siteTitle="Art" />
		<main className='content' id='everything'>
			{children}
		</main>
	</>
)

// TemplateAlt.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default TemplateAlt
