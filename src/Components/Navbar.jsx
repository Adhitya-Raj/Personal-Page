import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar(){

    const [toggle, setToggle] = useState(true)

    function ontoggle(){
        if(window.innerWidth <= 992 )
            setToggle(!toggle)
    }

    return(
    <nav className="navbar navbar-expand-lg bg-pri fixed-top f-rb">
        <div className="container-fluid">
            <Link smooth className="navbar-brand" to="home">ADHITYA RAJ</Link>
            <button className="navbar-toggler" type="button" onClick={ontoggle} aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_47" data-name="Layer 47"><path d="M12,20.84H32a1.5,1.5,0,0,0,0-3H12A1.5,1.5,0,0,0,12,20.84Z"/><path d="M53.5,32A1.5,1.5,0,0,0,52,30.5H12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,53.5,32Z"/><path d="M52,43.16H32a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,52,43.16Z"/></g></svg>
            </button>
            <div className={`${toggle ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link smooth className="nav-link" onClick={ontoggle} aria-current="page" to="home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" onClick={ontoggle} to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" onClick={ontoggle} to="skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" onClick={ontoggle} to="projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" onClick={ontoggle} to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}