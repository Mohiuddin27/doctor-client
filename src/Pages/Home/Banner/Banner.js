import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css';
import PrimaryButton from '../../Component/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div className="hero banner">
                <div className="hero-content pt-[50px] pb-[50px] flex-col lg:flex-row-reverse lg:pt-[100px] pb-[100px]">
                    <img src={chair} className="w-1/2 rounded-lg shadow-2xl banner-img" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;