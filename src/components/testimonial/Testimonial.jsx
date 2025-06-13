import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const profiles = [
  { 
    img: "/img/photo.jpg", 
    name: "John Doe", 
    role: "Software Engineer", 
    description: "John is a passionate software engineer with expertise in full-stack development."
  },
  { 
    img: "/img/photo.jpg", 
    name: "Jane Smith", 
    role: "Product Manager", 
    description: "Jane excels in product strategy and loves leading cross-functional teams."
  },
  { 
    img: "/img/photo.jpg", 
    name: "Michael Lee", 
    role: "UI/UX Designer", 
    description: "Michael crafts beautiful and intuitive user interfaces for web and mobile apps."
  },
  { 
    img: "/img/photo.jpg", 
    name: "Sarah Brown", 
    role: "Marketing Lead", 
    description: "Sarah specializes in digital marketing and brand storytelling."
  },
  { 
    img: "/img/photo.jpg", 
    name: "David Wilson", 
    role: "Data Scientist", 
    description: "David analyzes complex datasets to drive business insights and decisions."
  }
];

export const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container py-5">
       <div className="text-center">
      <h2 className="fw-bold pb-5 heading-with-underline">TESTIMONIALS</h2>
    </div>

      <Swiper
        slidesPerView={1} // Default for large screens
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        modules={[Pagination, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
        }}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index} className="text-center">
            <img
              src={profile.img}
              alt={profile.name}
              className="rounded-circle img-fluid"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <h4 className="mt-3 mb-1">{profile.name}</h4>
            <p className="text-muted">{profile.role}</p>
            <p style={{ maxWidth: "550px", margin: "0 auto", fontSize: "14px" }}>
              {profile.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="custom-pagination d-flex justify-content-center mt-4">
        {profiles.map((_, index) => (
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

