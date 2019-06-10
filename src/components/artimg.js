/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

const ArtImg = ({img, alttxt, click, imgInfo}) => (
    <div className='art-img'>
        <img
            className='img-med'
            src={'../img/art/' + img} alt={alttxt}
            onClick={() => click(imgInfo)}
            title={alttxt}
        />
    </div>
)

export default ArtImg
