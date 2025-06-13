import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Navbar } from "./components/navbar/Navbar";
import { Blogpage } from "./components/blog/Blog";

export const App = () => {
  return (
    <Router>
      
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blogpage/>} />
      </Routes>
      
      <footer className="bg-dark text-white py-3 text-center">
        <p className="mb-0">© 2025 Tastetrove. All Rights Reserved.</p>
      </footer>
    
    </Router>
  );
}