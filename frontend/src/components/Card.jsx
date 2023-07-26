import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  

    // const handleClick = ()=>
    // {
    //     <Navigate to={'/eventenroll'}></Link>
    // }
  
    return (

    
    <div className="flex justify-center items-center transform hover:scale-110 duration-300 mt-8">
      <div className="bg-white rounded-lg shadow-md p-6 w-96">
        <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{props.desc}</p>
        <p className="text-gray-500 text-xs mb-4">{props.da}</p>
        <p className="text-gray-500 text-xs mb-4">{props.location}</p>
        
        <button className="primary hover:bg-[#16a426] text-white font-bold py-2 px-4">
          Enroll
        </button>
      </div>
    </div>

  );
};

export default Card;