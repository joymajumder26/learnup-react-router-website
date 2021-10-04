import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Service.css';




const Service = () => {

    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch('./education.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [service])
    return (

        <div className='service m-0'>
         
            {
                service.map(service => <Course
                    key={service.id}
                    service={service}
                ></Course>)
            }
        </div>
    );
};

export default Service;