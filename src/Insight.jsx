import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink} from "react-router-dom";
import web from "../src/Images/insight.jpg";

function Insight() {
  return (
    <div>
      <section id="insight">
  <div className="content">
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pb-8 pt-lg-5 order-2 order-lg-0">
        <NavLink className="navbar-brand" to="/insight"> 
  <img src={web} className="img-fluid" alt="choose us" style={{width: "616px",height: "462px", paddingRight:"30px", paddingBottom:"30px"}}/>
      </NavLink>
        </div>
        <div className="col-lg-6 pl-9 pt-lg-5 order-1 order-lg-2  why-choose.png">
        <h3 id="ins" style={{paddingTop:"30px"}}>INSIGHTS </h3>
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
  )
}

export default Insight
