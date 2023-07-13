import React from "react";
import './Service.css';
const Service = ({service}) => {
    const {heading,image,paragraph}=service;
  return (
    <div className="card   bg-base-100 shadow p-4">
      <figure>
        <img
          className="service-img"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{heading}</h2>
        <p className="text-center">{paragraph}</p>
        
      </div>
    </div>
  );
};

export default Service;
