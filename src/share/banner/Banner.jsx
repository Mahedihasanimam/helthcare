import React from "react";
import bannerimg from "../../assets/resources/banner1.png";

const Banner = () => {
  return (
    
      <div className="bg-banner-img bg-no-repeat z-40 bg-cover ">
        
        <div className="relative  max-w-[1160px] mx-auto my-10">
          <img src={bannerimg} alt="bg-img" className="w-full h-auto" />
          <div className="absolute w-full h-full left-0 right-[-140px] top-0 bottom-0 rounded-[48px] bg-gradient-to-b from-transparent to-[rgba(2,0,67,0.47)]" />
        </div>
      </div>
   
  );
};

export default Banner;
