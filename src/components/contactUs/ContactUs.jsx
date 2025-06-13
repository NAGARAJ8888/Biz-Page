import "./Contact.css"
import React from 'react';
import { FiMapPin } from "react-icons/fi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";

export const ContactUs = () => {
  return (
    <div id="contact" style={{scrollMarginTop: "30px"}}>
      <div className="text-center">
        <h2 className="fw-bold pt-5 pb-3 heading-with-underline">CONTACT US</h2>
        <p className="pb-5 w-75 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt omnis provident id
        </p>
      </div>
      <div className="d-flex contact-flex">
        <div className="flex-fill pe-3 text-center contact-item" style={{ borderRight: "3px solid #a9a9a9" }}>
          <FiMapPin style={{ fontSize: "50px", marginBottom: "15px", color: "#10dc0c" }} />
          <h5 className="fw-bold" style={{ color: "#a9a9a9" }}>ADDRESS</h5>
          <p>A108 Adam Street, KARNATAKA, INDIA</p>
        </div>
        <div className="flex-fill px-3 text-center contact-item" style={{ borderRight: "3px solid #a9a9a9" }}>
          <LiaMobileAltSolid style={{ fontSize: "60px", marginBottom: "8px", color: "#10dc0c" }} />
          <h5 className="fw-bold" style={{ color: "#a9a9a9" }}>PHONE NUMBER</h5>
          <p>+918998899988</p>
        </div>
        <div className="flex-fill ps-3 text-center contact-item">
          <MdOutlineMailOutline style={{ fontSize: "60px", marginBottom: "5px", color: "#10dc0c" }} />
          <h5 className="fw-bold" style={{ color: "#a9a9a9" }}>EMAIL</h5>
          <p>example123@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
