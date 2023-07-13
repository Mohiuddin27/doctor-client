import React from "react";
import "./ContactForm.css";
import formbackground from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";

const ContactForm = () => {
  return (
    <div className="contact-form mt-[40px]">
      <div className="form pt-[30px]">
        <h1 className="text-secondary text-2xl fond-bold text-center">
          Contact Us
        </h1>
        <h1 className="text-3xl text-center font-bold text-white">
          Stay Connected With Us
        </h1>
        <form className="text-center mt-[40px] flex flex-col justify-center">
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="input w-[70%] lg:w-1/3"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className="input w-[70%] mt-[10px] lg:w-1/3"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered w-[70%] mt-[10px] lg:w-1/3"
              placeholder="Message"
            ></textarea>
            <div className='mt-[20px] mb-[20px]'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
