import React from 'react';
import './HomePages.css';

const HomePages = (props) => {
    const {img,name,Lesson,fees,duration,address}=props.homePages;
    return (

    
            <div className='home '>
            
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="text-primary fw-bold">{name}</h4> 
                <div className="text-primary ">
                <p>Lesson:{Lesson}</p>
                <p>Duration:{duration}</p>
                <p>Address:{address}</p>
                <p>Fees:${fees}</p> 
                </div> 
            </div>
            <button className='btn btn-primary '>Add To Cart</button>
            
        </div>
    
    );
};

export default HomePages;