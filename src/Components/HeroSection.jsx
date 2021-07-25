import { Link } from 'react-scroll'
import './../App.scss'
import Navbar from './Navbar'
import Resume from './../assests/Resume.pdf'


export default function HeroSection(){
    return(
        <section id="home" className="h-full bg-pri d-center">
            <Navbar />
            <div className="container h-100 d-center-end">
                <div className="col-12 col-md-8">
                    <h1 className="title f-rb">Hi 👋,<br />I am <span className="text-danger">Adhitya Raj</span></h1>
                    <h2 className="fs-3 f-pd subtitle">Student, Front-end Developer, Tech Enthusiast</h2>
                    <Link to="about" smooth className="mt-3 btn bg-ac1 box-shadow">Know More</Link>
                    <a href={Resume} className="mt-3 ms-3 btn box-shadow" target="_blank" rel="noreferrer noopener">View Resume</a>
                </div>
            </div>
        </section>
    )
}