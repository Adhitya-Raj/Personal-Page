import './../App.scss'
import { useState } from 'react'
import axios from 'axios'
import './Contactus.css'

const formSubmitUrl = {
    dev: "http://localhost:3500/api/form",
    prod: "https://formsubmit.co/0fdce0590d4580d3d661c340d680f8c2"
}


export default function ContactSection(){
    const [form, setForm] = useState()
    const [formReturn, setFormReturn] = useState("false")

    function onChange(event){
        setForm({...form,[event.target.name]:event.target.value})
    }

    function resetForm(){
        setTimeout(()=>{
            setForm(null)
            setFormReturn("false")
        },200)
        document.getElementById("contactForm").reset()
    }

    async function onSubmit(event){
        const modalToggle = document.getElementById("modalToggle");
        event.preventDefault()
        setFormReturn("pending")
        modalToggle.click();
        setForm({...form,_captcha: "false"})
        let data = await axios.post(formSubmitUrl.prod,form,{ headers:{ 'Content-Type': 'application/json' }})
            .catch( () => {
                setFormReturn("error")
            })
        if(data && data.status === 200)
            setFormReturn("true")
        else
            setFormReturn("error")
    }

    return (
        <section id="contact" className="h-full d-center bg-alt pb-5">
            <div className="container">
                <h2 className="f-pd fs-1 mb-4"><strong>Contact</strong></h2>
                <div className="row mb-5">
                    <div className="col-12 col-md-8">
                    <form onSubmit={onSubmit} onReset={resetForm} id="contactForm" className="bg-pri box-shadow p-3">
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input onChange={onChange} id="name" name="Name" type="text" placeholder="Your Name" className="form-control box-border" required/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="emailId" className="form-label">Email ID:</label>
                                <input onChange={onChange} type="email" name="EmailId" id="emailId" placeholder="yourname@email.com" className="form-control box-border" required/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="queryDescription" className="form-label">Query Description:</label>
                                <textarea onChange={onChange} name="Description" id="queryDescription" cols="20" rows="3" className="form-control box-border" placeholder="Enter details of your query" required></textarea>
                            </div>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="text" name="_honey" style={{display:"none"}} onChange={onChange}/>
                            <div className="col-12">
                                <button type="submit" className="btn bg-alt box-shadow">Submit Query</button>
                                <button type="reset" className="btn ms-3 box-shadow">Reset Form</button>
                            </div>
                        </div>                
                    </form>
                    <button type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#confirmModal" id="modalToggle">
                    modal
                    </button>
                    <div className="modal fade" id="confirmModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="confirmModalLabel" aria-hidden="true">
                    <div className="modal-dialog box-shadow">
                        <div className="modal-content" style={{borderRadius: '0'}}>
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={resetForm}></button>
                        </div>
                        <div className="modal-body">
                            {
                                formReturn==="true" &&
                                <>
                                <p className="text-center fs-5">Success!</p>
                                <div className="swal2-icon swal2-success swal2-animate-success-icon" style={{display: "flex"}}>
                                <div className="swal2-success-circular-line-left" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                <span className="swal2-success-line-tip"></span>
                                <span className="swal2-success-line-long"></span>
                                <div className="swal2-success-ring"></div> 
                                <div className="swal2-success-fix" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                <div className="swal2-success-circular-line-right" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                </div>
                                <p className="text-center fs-5">Thank you! We'll get back to you soon!</p>
                                </>
                            }
                            {
                                formReturn ==="error" &&
                                <>
                                    <p className="fs-5 text-center">Error</p>
                                    <div className="swal2-icon swal2-error swal2-animate-error-icon" style={{display: "flex"}}><span className="swal2-x-mark"><span className="swal2-x-mark-line-left"></span><span className="swal2-x-mark-line-right"></span></span></div>
                                    <p className="fs-6 text-center">Uh oh, something went wrong on our side. Kindly reach us by mail.<br/>Sorry for the inconvenience</p>
                                </>
                            }
                            {
                                formReturn === "pending" &&
                                <>
                                    <div className="success-checkmark">
                                        <div className="check-icon">
                                            <div className="icon-circle"></div>
                                        </div>
                                    </div>
                                    <p className="fs-5 text-center">Processing...</p>
                                </>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" disabled={(formReturn !== "true" && formReturn!=="error") ? true : false} data-bs-dismiss="modal" onClick={resetForm}>Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row mt-5 mt-md-0 h-100">
                            <div className="col-6 col-md-12 d-center">
                                <a href="mailto:adhityaraj@pm.me" className="btn bg-pri box-shadow">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
                                    <br />
                                    Email
                                </a>
                            </div>
                            <div className="col-6 col-md-12 d-center">
                            <a href="https://www.linkedin.com/in/adhitya-raj-r-667096203/" className="btn bg-pri box-shadow" rel="noreferrer noopener" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                    <br />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}