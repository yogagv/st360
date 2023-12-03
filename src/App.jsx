import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Solutions from "./Solutions";
import Insight from "./Insight";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar";
import {  Route, Routes } from "react-router-dom";
import Contact from "./Contact";

const App = () => {
    return(
        <>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
    );
};

export default App;