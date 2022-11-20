import React from "react";
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const Banner = () => {
  return (
    <div className="hero lg:min-h-screen" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair} alt=''
          className="lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
