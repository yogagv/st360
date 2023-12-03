import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaShieldAlt } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import web from "../src/Images/mser.jpg";
import web16 from "../src/Images/cybersecurity-freepik.jpg";
import web17 from "../src/Images/secmon.jpg";
import web18 from "../src/Images/firewall.webp";
import web19 from "../src/Images/sde.jpeg";
import web20 from "../src/Images/cis.jpg";

const Services = () => {
    return(
        <>
<div id="linear" style={{paddingTop:"40px"}}>
<section id="serve" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}>
<div className="service-slider" style={{width:"1349px", height:"410px"}}>
<div className="container-fluid">
  <div className="service">
  <h2 style={{paddingTop:"50px", paddingLeft:"520px", color: "white", alignItems:"center", fontWeight:"bold" }}> OUR SERVICES </h2>
        <section id="slide1" className="">
  <div className="content">   
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="row">
        <div className="col-md-4 pb-8 pl-50 pt-lg-5 pr-20 order-3 order-lg-0" style={{paddingLeft:"20px", float: "left", width: "33.33%"}}>
        <ul className="services" style={{listStyleType:"none"}}>  
<li className="actives"><FaShieldAlt />  Managed IT Services</li>
<li className="actives"><FaShieldAlt />  Security Solutions</li>
<li className="actives"><FaShieldAlt />  Security Monitoring</li>
<li className="actives"><FaShieldAlt />  SOC</li>
</ul>
</div>
        <div className="col-md-5 pb-8 pt-lg-5 order-3 order-lg-0" style={{float: "left", width: "33.33%"}}>
        <ul className="services ms-5 mb-2 mb-lg-0" style={{listStyleType:"none"}}>
<li className="actives"><FaShieldAlt />  VPAT</li>
<li className="actives"><FaShieldAlt />  Firewall Security</li>  
<li className="actives"><FaShieldAlt />  Software Development</li>
<li className="actives"><FaShieldAlt />  Implementation Services</li>
</ul>
</div>
<div className="col-md-5 pb-8 pt-lg-5 order-3 order-lg-0" style={{float: "left", width: "33.33%"}}>
<ul className="services ms-5 mb-2 mb-lg-0" style={{listStyleType:"none"}}>
<li className="actives"><FaShieldAlt />  Cloud infra Solutions</li>
<li className="actives"><FaShieldAlt />  Mail Solutions</li>
<li className="actives"><FaShieldAlt />  AMC</li>
</ul>
        </div>
        </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
    </div>   
</section>
<div>
<section id="slider" style={{paddingTop:"30px"}}>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={web} class="d-block w-100" alt=""/>
      <div className="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}} >
        <h2 id="sol"> Managed IT Services</h2>
        <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web16} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol">Security Solutions</h2>
        <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web17} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol">Security Monitoring</h2>
       <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web18} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web19} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol">Software Development</h2>
       <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web20} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol">Cloud Infra Solutions</h2>
       <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> 
</div>
</section>
</div>
</div>
        </>
    );
};

export default Services;