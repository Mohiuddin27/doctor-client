import React from "react";
import "./AppointmentHero.css";
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
const AppointmentHero = () => {
    
  return (
    <div className="hero appointment-hero lg:mt-[200px]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="hidden lg:block lg:-mt-40 lg:w-1/2 rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold text-secondary">Appointment</h1>
          <h1 className="text-white text-3xl mt-4">Make an appointment Today</h1>
          <p className="py-6 text-white">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
