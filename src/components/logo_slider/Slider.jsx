import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const logos = [
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
  "/img/logo.jpg",
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container py-5">
      <div className="text-center">
      <h2 className="fw-bold pb-5 heading-with-underline">OUR CLIENTS</h2>
    </div>

      <Swiper
        slidesPerView={5} // Default for large screens
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        modules={[Pagination, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 5, spaceBetween: 30 }, // Desktop
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="text-center">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="custom-pagination d-flex justify-content-center mt-4">
        {logos.slice(0, logos.length / 2).map((_, index) => (
          <span
            key={index}
            className="dot"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              margin: "0 5px",
              backgroundColor: activeIndex === index ? "#24c039" : "#ccc",
              transition: "background-color 0.3s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
};

