import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
    return (
<footer className="section4"
  style={{
    width: '100%',
    height: '200px',
    backgroundColor: 'black',
    display: 'flex',
    fontFamily:'sans-serif'
  }}
><div className="Footer" style={{ display: 'flex' }}>
<div>
  <Image
        src="/images/2.png"
        alt="Login Banner"
        width={180}
        height={180}
      />
</div>
<section className="social-media-icons" style={{
  marginLeft:"-40px",
  color:"#ffffff",
  marginTop:"70px"
}}>
        <a href="https://web.facebook.com/profile.php?id=100091284912309" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={{color:"white"}} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={{color:"white", marginLeft:"10px"}} />
        </a>
        <a href="https://www.linkedin.com/company/92527491/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{color:"white",marginLeft:"10px"}}/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{color:"white", marginLeft:"10px"}} />
        </a>
      </section>
  <div className="Quicklinks-footer" style={{ marginLeft:"520px",listStyle:"none", fontFamily:"sans-serif", fontSize:"light-bold",color:"white",}}>
    <h4><b>Quick links</b></h4>
    <li>About us</li>
    <li style={{marginTop:"2.5px"}}>Careers</li>
    <li style={{marginTop:"2.5px"}}>Contact us</li>
    <li style={{marginTop:"2.5px"}}>privacy policy</li>
    <li style={{marginTop:"2.5px"}}>Terms & Conditions</li>
  </div>
  <div className="Newsletter-footer" style={{marginLeft:"130px", color:"white"}}>
      <h4><b>Newsletter</b></h4>
      <p>Subscribe To Get The Latest Media Updates</p>
      <button style={{backgroundColor:"#FFFFFF", width:"130px", height:"40px", borderRadius:"10px"}}><b>Live chat</b></button>
  </div>
</div>
</footer>

);
};

export default Footer;
