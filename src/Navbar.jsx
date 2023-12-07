import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
/*import './App.css';*/
import { NavLink } from "react-router-dom";
import web from "../src/Images/Newlogo.png";

const Navbar = () => {
  return (
    <div>
    <div className="container-fluid nav_bg">
      <div className='row' >
      <nav className="navbar navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
       <NavLink className="navbar-brand" to="/">
        <img src={web} className="img-fluid"  alt="logo img" style={{height: "50px", width: "200px"}}/>  
         </NavLink>
    <button className="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    </span>
  </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-5 mb-2 mb-lg-0" style={{paddingLeft:"28px"}}>
      <li className="nav-item" >
          <NavLink className="nav-link" style={{color: "#bc1e7b", fontWeight:'bold'}} aria-current="page" to="/">
            HOME
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color: "#bc1e7b", fontWeight:'bold'}}  aria-current="page" to="/about">
            ABOUT US
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color: "#bc1e7b", fontWeight:'bold'}} to="/services">
            SERVICES
            </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" style={{color: "#bc1e7b", fontWeight:'bold'}}
           to="/" id="navbarDropdown" 
           role="button-on-click" 
           data-bs-toggle="dropdown" 
           aria-expanded="false">
            INDUSTRY
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}>
            <li>
                <NavLink className="dropdown-item" to="/solutions" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                EDUCATION
                </NavLink>
            </li>
            <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    CHARITY
                    </NavLink>
                    </li>
            <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    PUBLIC SECTOR
                    </NavLink>
                    </li>
            <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    FINANCIAL SERVICES
                    </NavLink>
                    </li>
                    <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
                    <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                HEALTHCARE
                </NavLink>
            </li>
            <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    LEGAL SECTOR
                    </NavLink>
                    </li>
                    <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    HOSPITALITY & RESIDENTIAL CORE
                    </NavLink>
                    </li>
                    <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    MANUFACTURING
                    </NavLink>
                    </li>
                    <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to="/" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    RETAIL
                    </NavLink>
                    </li>
          </ul>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" style={{color: "#bc1e7b", fontWeight:'bold'}}  aria-current="page" to="/insight">
            INSIGHT
            </NavLink>
        </li>

        {/*<li className="nav-item">
          <li NavLink className="nav-link-hover" style={{color:"white !important"}}>
          <NavLink className="nav-link" style={{color: "#bc1e7b", fontWeight:'bold'}} href="#">
            INSIGHT
            </NavLink>
            </li>
        </li>*/}
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" style={{color: "#bc1e7b", fontWeight:'bold'}}
           href="#" id="navbarDropdown" 
           role="button" 
           data-bs-toggle="dropdown" 
           aria-expanded="false">
            CONTACT US
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}>
            <li>
                <NavLink className="dropdown-item" to="/services" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    SUPPORT
                    </NavLink>
                    </li>
            <li>
                <hr className="dropdown-divider" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)'}}/>
                </li>
            <li>
                <NavLink className="dropdown-item" to= "/contact" style={{background: 'linear-gradient(to right, #d61c84, #790947, #00d4ff)', color:"white", fontWeight:"bold", fontSize:"12px"}}>
                    REACH US
                    </NavLink>
    </li>                
          </ul>
        </li>
        </ul>
    </div>
  </div>
</nav>
</div>
</div>
        </div>
  );
};

export default Navbar


