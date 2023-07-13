import React from "react";
import footer from '../../../assets/images/footer.png';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
  
    <footer className="footer p-10 pt-20 pb-20"
    
    style={{
        background: `url(${footer})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
    >
      <div>
        
        <span className="footer-title">SERVICES</span>
       <Link className="link link-hover">Emergency Checkup</Link> 
       <Link className="link link-hover">Monthly Checkup</Link> 
       <Link className="link link-hover">Weekly Checkup</Link> 
       <Link className="link link-hover">Deep Checkup</Link> 
      </div>
      <div>
        <span className="footer-title">ORAL HEALTH</span>
       <Link className="link link-hover">Fluoride Treatment</Link> 
       <Link className="link link-hover">Cavity Treatment</Link> 
       <Link className="link link-hover">Teeth Whitening</Link> 
       
      </div>
      <div>
        <span className="footer-title">OUR ADDRESS</span>
       <Link className="link link-hover">Dhaka Uddan, Mohammadpur, Bangladesh</Link> 
        
      </div>
    </footer>
  );
};

export default Footer;
