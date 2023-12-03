import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink} from "react-router-dom";
import web from "../src/Images/about.jpeg";

function About() {
  return (
    <div>
      <section id="abt" style={{paddingTop:"80px"}}>
  <div className="content">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pb-5 pt-lg-2 order-2 order-lg-0">
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
  <img src={web} className="img-fluid" alt="choose us" style={{width: "616px",height: "462px"}}/>
      </NavLink>
        </div>
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default About
