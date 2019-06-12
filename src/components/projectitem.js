/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

const ProjectItem = ({children, title, time, subtitle, desc, git, demo, img}) => (
    <div className='project-item'>
        <h2 className='subhead subhead-title'>{title}</h2>
        <h2 className='subhead subhead-subtitle'>{time}</h2>
        <div className="row">
            <div className="box box-color-indicator"></div>
            <div className="box box-60">
            <div className="project-subtitle">{subtitle}</div>
            <table className='keywords indent'>
                {children}
            </table>
            <>{desc}</>
            <div className="btn-collection">
                <div className="btns">
                    <a className="btn-link" href={git}>
                        <div className="btn">github</div>
                    </a>
                    <a href={demo}>
                        <div className="btn btn-lnk">demo</div>
                    </a>
                </div>
            </div>
            </div>
            <div className="box box-40">
                <img className="img-fade img-ctr" src={"../../img/code/" + img} alt="" width="100%" />
            </div>
    </div>
    </div>
)

export default ProjectItem
