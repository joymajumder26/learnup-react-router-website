import React, { useEffect, useState } from 'react';
import HomePages from '../HomePages/HomePages';
import './Home.css';


const Home = () => {
  
    const [home,setHome]=useState([]);
    useEffect(()=>{
        fetch('./education.json')
        .then(res=>res.json())
        .then(data=>setHome(data.slice(0,4)))
    },[])
    return (
        
    <div className="background">
           <div className="container">
            <div className='grid m-0'>
            
            
            {
                home.map(homePages=><HomePages key={homePages._id} homePages={homePages}></HomePages>)
            }
            
        </div>
       </div>
       </div>
    );
  };

export default Home;