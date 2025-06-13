import React from 'react'
import "./LogoCard.css";
import { LuBinoculars } from "react-icons/lu";
import { BsCardChecklist } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import Card from "../card/Card";

export const LogoCard = () => {
  return (
    <>
    <div className="container-fluid bg-dark py-5 ">
            <div className="d-flex justify-content-between w-75 mx-auto card-container gap-3">
              <Card
                className="custom-card"
                icon={<FaBriefcase size={50} color="#4ad231" />}
              />
              <Card
                className="custom-card"
                icon={<BsCardChecklist size={50} color="#4ad231" />}
              />
              <Card
                className="custom-card"
                icon={<LuBinoculars size={50} color="#4ad231" />}
              />
            </div>
        </div>
    </>
  )
}
