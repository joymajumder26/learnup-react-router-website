import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        // contact section
        <section className=" picture" id="contact">
            <h1 className="d-flex justify-content-center fw-bold  text-primary">Contact Us</h1>
            <div className="row ">

                <div className="col-lg-9 col-sm-12">
                    <div className="top">
                        <h1 className="d-flex justify-content-center text-white fw-bold ">CONTACT US</h1>

                    </div>
                    <form className="container" id=" contactForm">
                        <div className="row align-items-stretch mb-5">
                            <div className="container col-md-6 ">
                                <div className="form-group ">

                                    <input className="form-control mb-4" id="name" type="text" placeholder="Your Name *"
                                        data-sb-validations="required" style={{ height: "60px" }} />

                                </div>
                                <div className="form-group">

                                    <input className="form-control  mb-4" id="email" type="email" placeholder="Your Email *"
                                        data-sb-validations="required,email" style={{ height: "60px" }} />

                                </div>
                                <div className="form-group mb-md-0">

                                    <input className="form-control  mb-4" id="phone" type="tel" placeholder="Your Phone *"
                                        data-sb-validations="required" style={{ height: "60px" }} />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">

                                    <textarea className="form-control" id="message" placeholder="Your Message *"
                                        data-sb-validations="required" style={{ height: "230px" }}></textarea>

                                </div>
                            </div>
                        </div>



                        <div className="d-flex justify-content-center ">
                            <button className="btn btn-outline-secondary mx-2" style={{ background: "#E76F51", color: "#FFF2F1" }}
                                type="button" id="button-addon2">Send Message</button>
                        </div>
                    </form>

                </div>
                <div className="col-lg-3 col-sm-12 my-5">
                    <div class="card" style={{ width: "18rem" }}>
                        <div class="card-header ">
                            <h4 className="fw-bold text-danger">Get In Touch</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 className="fw-bold">Reach Us</h5>
                                <p className="fw-lighter">2512, New Market,Eliza Road, Sincher 80 CA,Canada, USA</p>
                            </li>
                            <li class="list-group-item"><h5 className="fw-bold">Drop A Mail</h5>
                                <p className="fw-lighter">support@Rikada.com <br /> Rikada@gmail.com</p></li>
                            <li class="list-group-item"><h5 className="fw-bold">Call Us</h5>
                                <p className="fw-lighter">(41) 123 521 458 <br /> +91 235 548 7548</p></li>
                        </ul>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Contact;