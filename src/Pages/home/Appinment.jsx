import React from "react";
import banerimg from "../../assets/resources/banner2.png";
import Mybtn from "../../components/Mybtn";

const Appinment = () => {
  return (
    <div className="relative max-w-[1160px] mx-auto my-10 px-4 sm:px-6">
      <img
        src={banerimg}
        alt="bg-img"
        className="w-full h-auto rounded-[50px]"
      />
      <div className="absolute w-full h-full left-0 top-0 rounded-[48px] bg-gradient-to-r from-[#020043]"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center px-6 z-10 text-start">
        <div className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold space-y-2 max-w-sm">
          <p>Get Your</p>
          <p>First Appointment</p>
          <p>at 50% Off!</p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Mybtn label={'Appointment'}/>
          <Mybtn label={'Learn more'}/>
        </div>
      </div>
    </div>
  );
};

export default Appinment;
