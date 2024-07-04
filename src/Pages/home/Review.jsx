import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Testimonial from "./Testimonial";

const Review = () => {
  const { data: reviewdata, isLoading, error } = useQuery({
    queryKey: ["reviewdata"],
    queryFn: async () => {
      const { data } = await axios.get("testimonialsData.json");
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading testimonials</div>;
  }

  return (
    <div className="max-w-[1160px] mx-auto my-10 space-y-6 px-6">
      <button className=" bg-[#FBFBFB] border-2 border-[#343268] text-[16px] text-[#020043] px-6 py-2 rounded-full">
        Testimonial
      </button>
      <h1 className="text-4xl max-w-sm font-semibold text-[#020043]">
        What they say about us
      </h1>

      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Default to 1 slide per view
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // Breakpoints for responsive design
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {reviewdata.map((singlerev, idx) => (
            <SwiperSlide key={idx}>
              <Testimonial
                singlerev={singlerev}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
