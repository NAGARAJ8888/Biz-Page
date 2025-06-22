import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("rgba(0, 0, 0, 0.7)");
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
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
        padding: "0.7rem 1.5rem",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand fs-3 text-white"
          href="#carouselExampleIndicators"
        >
          BIZPAGE
        </a>
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center gap-lg-3 gap-2">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={handleHomeClick}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#team">TEAM</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/blog">BLOG</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#dropdown"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DROPDOWN
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
