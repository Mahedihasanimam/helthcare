// src/components/Testimonial.js
import React from 'react';

const Testimonial = ({ singlerev}) => {
    const {title,content,rating,author}=singlerev
  return (
    <div className="bg-[#FFFFF5] shadow-lg rounded-lg p-6 mb-4 py-6 ">
      <h3 className="text-xl text-[#020043] font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center">
        <img
          src={`https://i.pravatar.cc/40?u=${author.name}`} // Placeholder for author image
          alt={`${author.name}`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
        <div className='flex items-center justify-center gap-2'>
          <p className="font-semibold">{author.name}</p>
          <p className="text-gray-500">{author.profession}</p>
        </div>
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        </div>
       
        
      
      </div>
      
    </div>
  );
};

export default Testimonial;
