import React from "react";
import './InfoCard.css';
const InfoCard = ({card}) => {
    const {name,description,bgColor,icon}=card;
  return (
    <div className={`carddiv card p-2 card-side  shadow-xl ${bgColor}`}>
      <figure>
        <img
          
          src={icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className="text-white">{description}</p>
       
      </div>
    </div>
  );
};

export default InfoCard;
