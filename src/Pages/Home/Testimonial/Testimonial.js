import React from "react";
import "./Testimonials.css";
const Testimonial = ({testimonial}) => {
    const {name,message,image,location}=testimonial;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        
        <p className="font-normal">{message}</p>
        <div className="card-actions flex mt-[15px]">
          <img src={image} className="testimonial-img"></img>
          <div className="mt-[20px]">
             <h1 className="font-bold">{name}</h1>
             <p className="font-bold">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
