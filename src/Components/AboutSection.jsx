import './../App.scss'
import photo from './../assests/Photo.jpg'

const PhotoStyle = {
    height:'min(100vw,400px)',
    width:'min(100vw,400px)',
    backgroundImage: `url(${photo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

export default function AboutSection(){
    return(
        <>
            <section id="about" className="h-full d-center bg-alt pb-5">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-12 col-md-6 d-center">
                            <div className=" bg-ac2 box-shadow p-5">
                                <h2 className="f-pd fs-1 mb-4"><strong>About</strong></h2>
                                <p className="f-rb">
                                    I am a sophomore student currently pursuing a bachelor of technology in Information Technology.
                                    <br />
                                    <br />
                                    When not wondering about 'What is the purpose of my life?' and 'What is really mean to be successful in life?', I work on my college academics and learn front-end development. Being fascinated with computers and the internet since pre-teens and having to troubleshoot and make games work on old hardware, computers have fascinated me for a long time.
                                    <br />
                                    <br />
                                    I am looking for an internship opportunity to gain experience in the field of software development. My area of interest is User Interface design and development in Web Applications.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-center">
                            <div className="box-shadow" style={PhotoStyle}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-full d-center bg-pri pb-5">
            <div className="container">
                <h2 className="mb-5 f-pd fs-1"><strong>Education</strong></h2>
                <div className="row f-rb mb-5 mb-md-0">
                    <div className="col-12 col-md-6 d-center tl tl-a tc-a">
                        <div className="bg-ac1 box-shadow p-5 me-md-5">
                            <h3 className="fs-4"><strong>College of Engineering, Guindy</strong></h3>
                            <h4 className="dt fs-5">(2019 - present)</h4>
                            <br />
                            <p>
                                I am pursuing my undergraduate under the Department of Information Science and Technology, currently holding a CGPA of 9.0. I actively participate in clubs in college. I volunteered in NSS for a year.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-12 col-md-6 d-center tl tl-b tc-b">
                        <div className="bg-ac1 box-shadow p-5 ms-md-5">
                            <h3 className="fs-4"><strong>D. A. V. Senior Secondary School, Mogappair, Chennai</strong></h3>
                            <h4 className="dt fs-5">(2005 - 2019)</h4>
                            <br />
                            <p>
                            I secured 94.6% in class 12. I actively participated in many co-curricular activites and in clubs like the Eco-Club, RSP.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}