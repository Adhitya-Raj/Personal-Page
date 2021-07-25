import './../App.scss'
import kavinograph from './../assests/project/Kavinograph.png'
import magscripto from './../assests/project/Magscripto.png'
import carsbnb from './../assests/project/Carsbnb.png'

export default function ProjectSection(){
    return (
        <section id="projects" className="h-full bg-pri d-center pb-5">
            <div className="container">
                <h2 className="f-pd fs-1 mb-5"><strong>Projects</strong></h2>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card box-shadow">
                            <div style={{backgroundImage : `url(${kavinograph})`}} className="card-img-top" alt="Kavinograph Thumbnail"/>
                            <div className="card-body d-center">
                                <a href="https://adhityaraj.github.io/kavinograph" className="btn" rel="noreferrer noopener" target="_blank">Kavinograph</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box-shadow">
                        <div style={{backgroundImage : `url(${magscripto})`}} className="card-img-top" alt="Magscripto Thumbnail"/>
                            <div className="card-body d-center">
                                <a href="https://adhityaraj.github.io/magscripto" className="btn" rel="noreferrer noopener" target="_blank">Magscripto</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box-shadow">
                        <div style={{backgroundImage : `url(${carsbnb})`}} className="card-img-top" alt="Carsbnb Thumbnail"/>
                            <div className="card-body d-center">
                                <a href="https://carsbnb.azurewebsites.net/" className="btn" rel="noreferrer noopener" target="_blank">Carsbnb</a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="d-center">
                    <a href="https://www.github.com/AdhityaRaj" rel="noreferrer noopener" target="_blank" className="btn box-shadow mt-5">View More <i className="im im-github ms-1"></i></a>
                </span>
            </div>
        </section>
    )
}