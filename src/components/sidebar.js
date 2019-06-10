import React from "react"

const Sidebar = () => (
    <div className="page-nav">
        <header className="header">
            <h1 id="bighead">
                {"Jas "}
                <br />Delgado
            </h1>
        </header>
        <nav className="main-navigation">
            <div id="nav-links">
                <div className='nav-link'><a className='lnk' href='/'>about</a><span className='nav-div'>{"//"}</span></div>
                <div className='nav-link'><a className='lnk' href='/code'>code</a><span className='nav-div'>{"//"}</span></div>
                <div className='nav-link'><a className='lnk' href='/art'>art</a><span className='nav-div'>{"//"}</span></div>
                <div className='nav-link'><a className='lnk' href='https://blog.jasdelgado.com'>blog</a></div>
            </div>
        </nav>
        <br />
        <span className="nav-link"><a href="https://github.com/jastronaut" className="lnk-social" title="github"><img src="../img/common/icon-github.png" alt="" className="social-ico" /></a>
        <a href="https://www.linkedin.com/in/jasdelgado/" className="lnk-social" title="linkedin"><img src="../img/common/icon-linkedin.png" alt="" className="social-ico" /></a>
        <a href="mailto:jas@jasdelgado.com" className="lnk-social" title="email me!"><img src="../img/common/icon-mail.png" alt="" className="social-ico" /></a>
        </span>
    </div>
)

export default Sidebar
