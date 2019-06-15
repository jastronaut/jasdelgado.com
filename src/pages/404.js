import React from "react"
import SEO from "../components/seo"
import Anime from 'react-anime'
import '../css/404.css'

const NotFoundPage = () => (
	<Anime easing="linear"
		loop={true}
		duration={3000}
		direction='alternate'
		backgroundColor={['#e05e5e', '#949cf2']}>
		<div className='bigBg'>
			<div className='centered'>
				<h1>404: NOT FOUND</h1>
				{/* <img src='../img/404.png' width='400px' /> */}
				{/* <p onClick={goBack}>go back</p> */}
				<a id='backlink' href='/'>go home</a>
			</div>
		</div>
	</Anime>
)

export default NotFoundPage
