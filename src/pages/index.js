import React from "react"
// import { Link } from "gatsby"

import Template from "../components/template"
import ImgCard from '../components/imgcard'
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Template>
    <SEO title="Home" />
    <h1 className='content-head'>it's jas delgado!</h1>
	<div className="line-div"></div>
    <p>hey, i'm jas and you found my website! i'm a computer science undergrad living in southern california. this is a place for me to talk about my interests and show off my projects--feel free to look around and learn more about me!</p>

	<div className='img-area'>
	<ImgCard imgsrc='../img/i/me1.png' caption='me, holding balloons at my university' />
	<ImgCard imgsrc='../img/i/me2.png' caption="me, at my club's first local hack day" />
	</div>

	<hr />

	<h2 className='subhead subhead-heading'>my interests!</h2>

	<div className='row row-topic'>
		<div className='col col-20'>
			<img className='cat-icon' src='../img/i/icon-code.png' alt='code icon' />
		</div>
		<div className='col col-80'>
			<p className='cat cat-txt'>
				<span className='txt-gradient'>programming</span> i've always had an interest in technology and got into programming in my junior year of high school after joining the robotics team! i'm currently studying computer science in college and hope to either work in the industry or teach cs to secondary school students!
			</p>
		</div>
	</div>

	<div className='row row-topic'>
		<div className='col col-20'>
			<img className='cat-icon' src='../img/i/icon-art.png' alt='art icon' />
		</div>
		<div className='col col-80'>
			<p className='cat cat-txt'>
				<span className='txt-gradient'>art + character design</span> my longest running hobby is drawing (and painting)! while i don't have the time to draw as often, i'll post once in a while on my <a className="lnk" href="https://www.instagram.com/lulltonull/">instagram</a> or <a className="lnk" href="https://twitter.com/lulltonull">twitter</a>. a few of my favorite online artists are <a className="lnk" href="http://seventypercentethanol.tumblr.com">70% EtOH</a>, <a href="http://leppu.tumblr.com" className="lnk">leppu</a>, and <a href="http://blog.loish.net" className="lnk">loish</a>.
			</p>
		</div>
	</div>
	
  </Template>
)

export default IndexPage
