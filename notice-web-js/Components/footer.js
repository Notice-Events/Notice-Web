import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
<footer className="section4"
  style={{
    width: '100%',
    height: '250px',
    backgroundColor: '#DEDEDE',
    marginTop: '30px',
    display: 'flex',
    fontFamily:'sans-serif'
  }}
><div className="Footer" style={{ display: 'flex' }}>
<section className="social-media-icons" style={{
  padding:"20px",
  marginTop:"20px",
  marginLeft:"100px",
}}>
  <h1>Company Logo</h1>
  <h3>Social media</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={{color:"black"}} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={{color:"black", marginLeft:"10px"}} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{color:"black",marginLeft:"10px"}}/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{color:"black", marginLeft:"10px"}} />
        </a>
      </section>
  <div className="Quicklinks-footer" style={{marginTop:"20px", marginLeft:"520px",listStyle:"none", fontFamily:"sans-serif", fontSize:"light-bold",}}>
    <h4 style={{marginTop:"20px"}}><b>Quick links</b></h4>
    <li>About us</li>
    <li style={{marginTop:"2.5px"}}>Careers</li>
    <li style={{marginTop:"2.5px"}}>Contact us</li>
    <li style={{marginTop:"2.5px"}}>privacy policy</li>
    <li style={{marginTop:"2.5px"}}>Terms & Conditions</li>
  </div>
  <div className="Newsletter-footer" style={{marginTop:"20px", marginLeft:"130px"}}>
      <h4><b>Newsletter</b></h4>
      <p>Subscribe To Get The Latest Media Updates</p>
      <button style={{backgroundColor:"#FFFFFF", width:"130px", height:"40px", borderRadius:"10px"}}><b>Live chat</b></button>
  </div>
</div>
</footer>

);
};

export default Footer;
