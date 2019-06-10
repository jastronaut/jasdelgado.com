import React from "react"
// import { Link } from "gatsby"

import Template from "../components/template"
import ProjectItem from '../components/projectitem'
import SEO from "../components/seo"
import '../css/code.css'

const Code = () => (
  <Template>
    <SEO title="code + jas delgado" />
    <h1 className='content-head'>code + jas = ♡</h1>
    <div className="line-div"></div>
    <p>I started editing tumblr themes in HTML and CSS when I began high school and eventually ended up head programmer of my high school robotics team by senior year. Code is one of my passions, both in and outside of school. Here are some of my favorite projects so far.</p>
    <ProjectItem title='UCI Prerequisites' time='Summer/Fall 2018' subtitle='Web app that helps UCI ICS students find prerequisite requirements for courses + course offerings.' desc={<p>Used BeautifulSoup to scrape UCI's schedule of classes and catalogue to find course information (title, description, prerequisites). Created a user interface using python and javascript where users can select specific classes to see course information.</p>} git='ttps://github.com/jastronaut/uci-prereqs' demo='http://apps.jasdelgado.com/uciprereqs/' img='example-uciprereqs.png'>
    <tr>
        <td>python</td>
        <td>jquery</td>
        <td>html</td>
    </tr>
    <tr>
        <td>django</td>
        <td>ajax</td>
        <td>css</td>
    </tr>
    </ProjectItem>
    <ProjectItem title='YouQueue' time='Fall 2018' subtitle='Hackathon project to help queue up music for events using YouTube music videos.' desc={<p>Project created while hosting a <a href="https://localhackday.mlh.io" className="lnk">12 hour hackathon</a> for a club at school. Created a tool for users to submit and vote on songs to be queued to a YouTube playlist.</p>} git='https://github.com/jastronaut/YouQueue' demo='https://devpost.com/software/youqueue-a-hacker-music-helper' img='example-youqueue.png'>
    <tr>
        <td>python</td>
        <td>jquery</td>
        <td>html</td>
    </tr>
    <tr>
        <td>django</td>
        <td>ajax</td>
        <td>youtube API</td>
    </tr>
    </ProjectItem>

    <ProjectItem title='Healthie' time='Winter/Spring 2018' subtitle='Web app to help you find meals for your caloric needs.' desc={<><p>Web application that displays suggested meals and recipes based on inputted user info. The application was created in a group for the HackUCI 2018 hackathon. Built using Python and the Django web framework.</p><p>Created with <a className="lnk" href="http://williamcastelli.com">William Castelli</a>.</p></>} git='https://github.com/jastronaut/healthie' demo='http://apps.jasdelgado.com/healthie/' img='example-healthie.png'>
    <tr>
        <td>python</td>
        <td>html</td>
        <td>css</td>
    </tr>
    <tr>
        <td>django</td>
        <td>edamam recipe api</td>
        <td></td>
    </tr>
    </ProjectItem>
    <ProjectItem title='BMI/TDEE Calculator' time='Spring 2018' subtitle='Simple BMI (Body Mass Index) and TDEE (Total Daily Energy Expenditure) calculator.' desc={<p>A simple calculator that takes in a user's body information to show their BMI and optionally their TDEE. Uses the Local Storage API to store the user's information locally for quicker lookup of information.</p>} git='https://github.com/jastronaut/bmicalc' demo='http://apps.jasdelgado.com/bmicalc' img='example-bmicalc.png'>
    <tr>
        <td>html</td>
        <td>javascript</td>
        <td>jquery</td>
    </tr>
    <tr>
        <td>bootstrap</td>
        <td>localstorage api</td>
        <td></td>
    </tr>
    </ProjectItem>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Template>
)

export default Code
