import React from "react";
import "./Dantal.css";
import dantal from '../../../assets/images/treatment.png';
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
const Dantal = () => {
  return (
    <div className="hero w-100 mt-[50px] lg:w-3/4 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={dantal}
          className="w-96 rounded-lg shadow-2xl"
        />
        <div className="w-100 lg:w-1/2">
          <h1 className="text-3xl font-bold">Exceptional Dental<br></br> Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Dantal;
