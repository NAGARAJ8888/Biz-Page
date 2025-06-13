import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("rgba(0, 0, 0, 0.5)");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fw-bold"
        style={{
          backgroundColor: bgColor,
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          padding: "0 40px"
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand text-white fs-2 my-auto custom-border"
            href="#carouselExampleIndicators"
          >
            BIGPAGE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  to="/"
                  onClick={handleHomeClick}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  href="#about"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  href="#services"
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  href="#portfolio"
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  href="#team"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  to="/blog"
                >
                  BLOG
                </Link>
              </li>
              <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          DROPDOWN
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ fontSize: "15px" }}
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;