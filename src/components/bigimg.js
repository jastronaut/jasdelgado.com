/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import {X, ArrowLeft, ArrowRight, ExternalLink} from 'react-feather'
import LazyLoad from 'react-lazyload'

const BigImg = ({imgTitle, imgCaption, imgSrc, arrowClick, closeImg}) => (
    <div id="bg-img-zoom">
    <span id="exit-btn" onClick={closeImg}><X /></span>
    <span id="openFull"><a href="" target="_blank" rel="noopener noreferrer"><ExternalLink /></a></span>
    <div id="leftBtn" onClick={() => arrowClick(1)}><ArrowLeft /></div>
    <div id="rightBtn" onClick={() => arrowClick(-1)}><ArrowRight /></div>
    <div id="imgHolder">
        <LazyLoad>
        <img id="theImg" src={'../img/art/' + imgSrc} alt="" />
        </LazyLoad>
    </div>
    <div id="imgTxt">
        <h2 id="imgTitle">{imgTitle}</h2>
        <p id="imgCaption">{imgCaption}</p>
    </div>
</div>
)

export default BigImg
