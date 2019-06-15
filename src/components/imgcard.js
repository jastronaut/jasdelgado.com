import React from "react"
import PropTypes from "prop-types"
import LazyLoad from 'react-lazyload'

// add input for alt text
const ImgCard = ({imgsrc, caption}) => (
    <div className='img-card'>
        {/* { console.log(imgsrc)} */}
        <LazyLoad>
        <img className='content-img img-fade' src={imgsrc} alt='' />
        </LazyLoad>
        <p className='caption'>
            {caption}
        </p>
    </div>
)

ImgCard.propTypes = {
    imgsrc: PropTypes.string,
    caption: PropTypes.string,
}

// replace with not found image
ImgCard.defaultProps = {
    imgsrc: ``,
    caption: ``,
}

export default ImgCard