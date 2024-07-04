import React from 'react';
import graf from '../../assets/resources/graf.png';
import certified from '../../assets/resources/Icons.png';
import group from '../../assets/resources/Group 7.png';
import money from '../../assets/resources/money.png';
import video from '../../assets/resources/video2.png';

const Statistics = () => {
  return (
    <div className="container mx-auto p-4 relative">
      <div className="text-center lg:text-6xl text-4xl mb-4  font-bold lg:absolute lg:top-6  right-0 left-0">Comprehensive Care <br /> for Every Patient</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded shadow h-fit flex flex-col justify-between mt-auto">
          <div>
            <h2 className="text-4xl font-bold text-blue-500">98%</h2>
            <p>Satisfaction rate, reflecting our commitment.</p>
          </div>
          <img src={graf} alt="" className="mt-2"/>
        </div>
        <div className="bg-white p-4 rounded shadow h-fit flex flex-col justify-end mt-auto">
          <h2 className="text-4xl font-bold text-blue-500">500+</h2>
          <p>Board-certified doctors</p>
          <img  src={certified} alt="" className="mt-2 w-fit"/>
        </div>
        <div className="bg-white p-4 rounded shadow h-fit flex flex-col justify-end mt-auto">
          <h2 className="text-4xl font-bold text-blue-500">4.8</h2>
          <p>Over 20,000 patients</p>
          <img  src={group} alt="" className="mt-2 w-fit"/>
        </div>
        <div className="bg-white p-4 rounded shadow h-fit flex flex-col justify-end mt-auto">
          <h2 className="text-4xl font-bold text-blue-500">$5000</h2>
          <p>Money spent for poor patients</p>
          <img  src={money} alt="" className="mt-2 w-fit"/>
        </div>
        <div className="bg-white p-4 rounded shadow h-full flex flex-col  ">
          <h2 className="text-4xl font-bold text-blue-500">50+</h2>
          <p>Free lesson videos for patients </p> <br />
          <img  src={video} alt="" className="mt-2 w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
