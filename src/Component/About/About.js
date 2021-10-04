import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [instructor, setInstructor] = useState([]);
    // data load
    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <section className="container my-5 " id="Question">

            <div className="row my-5 ">
                <h1 className="d-flex justify-content-center fw-bold  text-primary" >About <span className="ms-2"
                >Us</span></h1>
                <div className="col-lg-6 col-sm-12 q-img  ">
                    <img className="ms-5" src="https://learnup.smartdemowp.com/wp-content/uploads/2021/05/edu_2.png" style={{ width: "500px" }} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 ">
                    <h2 className="fw-bold my-5 text-success">Know About E-Learn Learning Platform</h2>
                    <div>
                        <h4 className="text-primary">Cost Effective</h4>
                        <p className="fw-light">Learnup is one of the cost effective learning centres from last decade</p>
                    </div>
                    <div>
                        <h4 className="text-primary">Improves Performance And Productivity</h4>
                        <p className="fw-light">Learnup helps learners to train quicker and the easiest way to increase performance.</p>
                    </div>
                    <div>
                        <h4 className="text-primary">Saves Time</h4>
                        <p className="fw-light">Our instructor uploads the materials in time and shares the content with the learners in time.</p>
                    </div>

                </div>


            </div>

            {/* mapping data */}
            {
                instructor.map(data => {
                    return (
                        <div className="teacher" style={{display:'inline-block'}}>
                            <div className='image'>
                                <img src={data.img} alt="" />
                            </div>
                            <div >
                                <h4 className="text-primary fw-bold">{data.name}</h4>
                                <div>
                                    <p className="fw-lighter">{data.course}</p>
                                    <p>Rating: {data.rating}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </section>


    );
};

export default About;