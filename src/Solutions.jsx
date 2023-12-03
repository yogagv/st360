import React from 'react'
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import web5 from "../src/Images/edu.avif";
import web6 from "../src/Images/pub.png";
import web7 from "../src/Images/fin.jpg";
import web8 from "../src/Images/health.jpg";
import web9 from "../src/Images/legal.jpg";
import web10 from "../src/Images/hos.jpg";
import web11 from "../src/Images/manu.jpg";
import web12 from "../src/Images/retail.avif";



function Solutions() {
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

  return (
    <div>
      <div id="linear" style={{paddingTop:"30px"}}>
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
    </div>
  )
}

export default Solutions;



