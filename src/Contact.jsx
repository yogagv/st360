import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div id="linear" style={{paddingTop:"38px"}}>
<section id="con" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}>
<div className="service-slider" style={{width:"1349px", height:"575px"}}>
<div className="container-fluid">
  <div className="service">
  <h2 style={{paddingTop:"90px", paddingLeft:"520px", color: "white", alignItems:"center", fontWeight:"bold" }}> CONTACT US </h2>
        <section id="slide1" className="">
  <div className="content">   
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="row">
        <div className="col-md-4 pb-8 pl-50 pt-lg-5 pr-20 order-3 order-lg-0" style={{paddingLeft:"20px", float: "left", width: "20%"}}>
        <ul className="services" style={{listStyleType:"none"}}>
<li className="contact">Services</li>            
<li className="actives1">Managed IT Services</li>
<li className="actives1">Security Solutions</li>
<li className="actives1">Security Monitoring</li>
<li className="actives1">SOC</li>
<li className="actives1">VPAT</li>
<li className="actives1">Firewall Security</li>  
<li className="actives1">Software Development</li>
<li className="actives1">Implementation Services</li>
<li className="actives1">Cloud infra Solutions</li>
<li className="actives1">Mail Solutions</li>
<li className="actives1">AMC</li>
</ul>
</div>
        <div className="col-md-5 pb-8 pt-lg-5 order-3 order-lg-0" style={{float: "left", width: "20%", paddingLeft:"0px"}}>
        <ul className="services ms-5 mb-2 mb-lg-0" style={{listStyleType:"none"}}>
        <li className="contact">Industry</li>
<li className="actives1">Education</li>
<li className="actives1">Charity</li>
<li className="actives1">Public Sector</li>  
<li className="actives1">Financial Services</li>
<li className="actives1">Healthcare</li>
<li className="actives1">Legal Sector</li>  
<li className="actives1">Hospitality & Residential Core</li>
<li className="actives1">manufacturing</li>
<li className="actives1">Retail</li>
</ul>
</div>
<div className="col-md-5 pb-8 pt-lg-5 order-3 order-lg-0" style={{float: "left", width: "20%"}}>
        <ul className="services ms-5 mb-2 mb-lg-0" style={{listStyleType:"none"}}>
        <li className="contact">Solutions</li>
<li className="actives1">Cyber Resilient</li>
<li className="actives1">Digital Transformation</li>
</ul>
        </div>
        <div className="col-md-5 pb-8 pt-lg-5 order-3 order-lg-0" style={{float: "left", width: "40%", alignItems:"center", paddingLeft:"50px"}}>
        <ul className="services ms-5 mb-2 mb-lg-0" style={{listStyleType:"none"}}>
        <li className="con1">You Reach, We Fix!!!</li>
<li className="actives2">Give us a call</li>
<li className="call"><FaPhoneAlt className="icon"/> +91 8754656185</li>
<li className="actives2">Send us a email</li>
<li className="call"><FaEnvelope className="icon"/>  info@sectech360.com</li>
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
</div>
    </div>
  )
}

export default Contact;
