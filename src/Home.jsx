import React, { Component } from "react";
import Slider from "react-slick";
/*import './App.css'*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import web from "../src/Images/mser.jpg";
import web1 from "../src/Images/digi.jpg";
import web2 from "../src/Images/cyber.jpg";
import web3 from "../src/Images/about.jpeg";
import web5 from "../src/Images/edu.avif";
import web6 from "../src/Images/pub.png";
import web7 from "../src/Images/fin.jpg";
import web8 from "../src/Images/health.jpg";
import web9 from "../src/Images/legal.jpg";
import web10 from "../src/Images/hos.jpg";
import web11 from "../src/Images/manu.jpg";
import web12 from "../src/Images/retail.avif";
import web13 from "../src/Images/insight.jpg";
import web14 from "../src/Images/charity.jpg";
import web15 from "../src/Images/digi.jpg";
import web16 from "../src/Images/cybersecurity-freepik.jpg";
import web17 from "../src/Images/secmon.jpg";
import web18 from "../src/Images/firewall.webp";
import web19 from "../src/Images/sde.jpeg";
import web20 from "../src/Images/cis.jpg";
import web4 from "../src/Images/services-bg.jpg";


const Home = () => {
  var slick = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
      <div style={{overflowX:"hidden", overflowY:"hidden"}}>
        <section id="slider">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={web} class="d-block w-100" alt=""/>
      <div className="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol"> Managed IT Services</h2>
        <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web15} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol" style={{paddingLeft:"130px", paddingTop:"20px"}}>Digital Transformation</h2>
        <span>
      <NavLink className="navbar-brand" to="/"> 
      <button type="button" className="btn btn-success" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', fontWeight:"bold", border:"none", borderradius: "30px", padding: "14px"}}>KNOW MORE</button>
      </NavLink>
      </span>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web2} class="d-block w-100" alt=""/>
      <div class="carousel-caption" style={{fontWeight:"bold", fontSize:"55px", textAlign:"center"}}>
        <h2 id="sol">Cyber Resilient</h2>
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
  <section id="abt">
  <div className="content">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pb-8 pt-lg-5 order-2 order-lg-0">
  <h2 id="ins">Why we ?</h2>
  <p>
  we specialise in providing comprehensive and reliable and client-focused IT solutions for businesses of all levels. 
  with, years of experience, We pride ourselves on being at the forefront of technical solutions. 
  Our team comprises experts in diverse fields, ensuring that your technology infrastructure runs seamlessly. 
  We stay ahead of industry trends, allowing our clients to benefit from the latest advancements in technology solutions.
  </p>
  <p>
  Our firm has a solid track record of successfully delivering complex technical solutions across various industries. 
  Client satisfaction is our priority, it shows positive impact of our work on businesses and organizations.
  We prioritize the security and compliance requirements of our clients, particularly in industries with stringent regulations. 
  Our robust cybersecurity measures and commitment to compliance ensure that sensitive data is protected, 
  and our solutions adhere to industry standards and regulations.
  </p>
  <p>
  Our solutions are designed with scalability in mind, allowing businesses to grow without technological limitations. 
  Moreover, we anticipate future trends and ensure that our solutions are adaptable, 
  helping our clients stay ahead in an ever-evolving digital landscape.
  </p>
        </div>
        <div className="col-lg-6 pl-9 pt-lg-5 order-1 order-lg-2  why-choose.png">
        <NavLink className="navbar-brand" to="/about"> 
  <img src={web3} className="img-fluid" alt="choose us" style={{width: "616px",height: "462px"}}/>
      </NavLink>
        </div>
        </div>
      </div>
      </div>
      </div>
      </section>

<div id="linear" style={{paddingTop:"16px"}}>
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
</div>
<div id="linear" style={{paddingTop:"5px"}}>
  <section id="ind">
  <div>
  <h2 style={{paddingTop:"50px", paddingLeft:"580px", color: "#bc1e7b", alignItems:"center", fontWeight:"bold" }}> SOLUTIONS </h2>
        <Slider {...slick}>
          <div id="slicker">
            <img src={web5} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Education</h3>
            <p id="slp">
            our company focuses on creating tailored solutions 
            that enhance the learning experience, improve operational efficiency, 
            and foster a dynamic educational environment.
  </p>
          </div>
          <div id="slicker">
          <img src={web6} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Public Sector</h3>
            <p id="slp">
            our commitment to the public sector is rooted in empowering 
            governments and public entities with quality solution to enhance 
            efficiency, transparency of the citizen needs.
            {/*our technical expertise extends to the realm of cybersecurity, 
            where we work closely with government agencies to fortify their digital 
            infrastructure against cyber threats. We implement cutting-edge security 
            measures to protect sensitive data and ensure the confidentiality and integrity of government systems.*/}
  </p>
          </div>
          <div id="slicker">
          <img src={web7} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Financial Services</h3>
            <p id="slp">
            One of our primary services is robust and 
            secure financial software solutions for online banking, mobile payments, and 
            financial management platforms. {/*Cybersecurity is paramount in the financial industry, 
            and our firm places a strong emphasis on implementing state-of-the-art security measures. 
            From safeguarding customer data to protecting against cyber threats, our solutions adhere to the highest standards. 
            ensuring the integrity and confidentiality of financial transactions.*/}
  </p>
          </div>
          <div id="slicker">
          <img src={web8} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Health Care</h3>
            <p id="slp">
            Ensuring the security and privacy of healthcare data is paramount. Our firm is dedicated 
            to implementing robust cybersecurity measures and provide reliable solutions. {/*including encryption and access controls, 
            to safeguard patient information and comply with healthcare data protection regulations.
            Moreover, we contribute to the adoption of emerging technologies in healthcare, such as the Internet 
            of Things (IoT) for remote patient monitoring.*/}
  </p>
          </div>
          <div id="slicker">
          <img src={web9} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Legal Services</h3>
            <p id="slp">
            Our IT Support for Legal Industry is built 
            to meet these stringent requirements.
  </p>
          </div>
          <div id="slicker">
          <img src={web10} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Hospitality & Residential Core</h3>
            <p id="slp">
            Our reliable hospitality IT support for hospitallity is 
            finely tuned to the unique demands of this sector.
  </p>
          </div>
          <div id="slicker">
          <img src={web11} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Manufacturing</h3>
            <p id="slp">
            We seamlessly integrate cloud-based solutions that facilitate real-time collaboration, 
            enabling your team to adapt swiftly to market demands and production fluctuations 
            with our Manufacturing IT support solutions.</p>
          </div>
          <div id="slicker">
          <img src={web12} style={{width:"266px", height:"182px"}} alt=""/>
            <h3>Retail</h3>
            <p id="slp">
            Our IT support services provide you with advanced inventory management systems that
             help you track stock levels, and manage replenishments.
  </p>
          </div>
        </Slider>
      </div>
  </section>
</div>
<div>
<section id="insight">
  <div className="content">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pb-8 pt-lg-5 order-2 order-lg-0">
        <NavLink className="navbar-brand" to="/about"> 
  <img src={web13} className="img-fluid" alt="choose us" style={{width: "616px",height: "462px", paddingRight:"30px", paddingBottom:"30px"}}/>
      </NavLink>
        </div>
        <div className="col-lg-6 pl-9 pt-lg-5 order-1 order-lg-2  why-choose.png">
        <h3 id="ins">INSIGHTS </h3>
  <p>
  our core insight revolves around being architects of innovation and problem solvers 
  in the ever-evolving technological landscape. We recognize that technology is not 
  just a tool but a catalyst for transformation, and our mission is to empower our clients businesses 
  to thrive in this digital era.Our insight is rooted in the belief that every challenge 
  presents an opportunity for innovation, and we position ourselves as strategic partners for 
  our clients, guiding them through the complexities of technological advancement.
  </p>
  <p>
  We foster a culture of continuous learning and collaboration within our company, ensuring 
  that our team remains at the forefront of emerging technologies. This commitment to staying 
  ahead of the curve enables us to provide forward-thinking solutions that not only meet our 
  clients' current needs but also anticipate and adapt to future trends. Our insight emphasizes 
  the importance of not just services but co-creating impactful solutions that drive tangible 
  value for our clients. We pride ourselves on being agile, adaptable, and client-focused.
  </p>
        </div>
        </div>
      </div>
      </div>
      </div>
      </section>
</div>
<div>
<section id="slider">
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
<div id="linear" style={{paddingTop:"0.8px"}}>
<section id="con" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}>
<div className="service-slider" style={{width:"1349px", height:"460px"}}>
<div className="container-fluid">
  <div className="service">
  <h2 style={{paddingTop:"50px", paddingLeft:"520px", color: "white", alignItems:"center", fontWeight:"bold" }}> CONTACT US </h2>
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
  );
};

export default Home;