import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Image from "next/image";

const Contactus = ()=> {
    const [formData, setFormData] = useState({
        fullname: "",
        contact: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          fullname: "",
          contact: "",
          email: "",
          message: "",
        });
      };
    return (
        <div>
            <Navbar />
        <section
            className="section1"
            style={{
            backgroundColor: "#DEDEDE",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
        }}
      >
        <h3 style={{ fontSize: "40px", marginTop:"20px", marginBottom:"60px"}}>
          <b>We are Notice</b>
        </h3>
        <p style={{ fontSize: "25px", marginTop:"-30px"}}>
          We Bring
        </p>
        <h3 style={{ fontSize: "40px", marginTop:"-20px" }}>
          <b>dream Weddings</b>
        </h3>
        <p style={{ fontSize: "25px", marginTop:"-30px"}}>
          to life!
        </p>
</section>
<section className="form" style={{display:"flex",}}>
<div
  style={{
    width: "30%",
    marginLeft: "200px",
    padding: "20px",
    fontFamily: "sans-serif",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",

  }}
>
  <h2 style={{ marginBottom: "20px"}}>Say Hello!</h2>
  <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="fullname"><b>Full Name</b><br/></label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        required
        placeholder="Enter name"
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc",width:"400px", marginTop:"10px"}}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="contact"><b>Contact Number</b><br/></label>
      <input
        type="tel"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        required
        placeholder="Contact number"
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc",width:"400px", marginTop:"10px"}}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="email"><b>Email Address</b><br/></label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email address"
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc",width:"400px", marginTop:"10px"}}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="message"><b>Message</b><br/></label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Enter your message"
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc",width:"400px", marginTop:"10px"}}
      ></textarea>
    </div>

    <button
      type="submit"
      style={{
        padding: "10px 20px",
        backgroundColor: "grey",
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        alignSelf: "center",
        width:"420px",
        marginTop:"10px"
      }}
    >
      Submit
    </button>
  </form>
</div>
<div style={{ 
    marginTop:"60px",
    width:"500px",
    marginLeft:"50px",
    fontFamily:"sans-serif",
    }}>
        <div style={{ marginTop:"50px",marginLeft:"20px"}}>
        <h3><b>Event Organize</b></h3>
        <p>From check-in to last call, the Norice Organizer app<br/>
        gives you instant access to all the information you need.<br/> 
        Easily oversee your event, monitor real-time ticket sales,<br/>
        check-in attendees with a scan, track up-to-the-minute<br/>
        attendance, and accept secure payment for event<br/>
        tickets.
</p>
        <h3>Marketing Collaborations</h3>
        <p>Boost has all the marketing tools you need to sell more<br/> tickets, build your audience, and grow your events<br/> business
</p>
        </div>
    </div>
</section>
    <section className="platform-class"
            style={{
            width: '78%',
            height: '350px',
            backgroundColor: '#DEDEDE',
            marginLeft: '140px',
            marginTop: '30px',
            display: 'flex',
            fontFamily:'sans-serif',
            marginBottom:'40px'
        }}
    >
        <div style={{ padding: '60px', display: 'flex' }}>
        <Image src="/images/Download.jpg" alt="My Image" width={300} height={250} style={{ marginRight: '180px' }}/>
        <div className="DownloadApp">
            <h1>Notice App</h1>
            <p style={{fontSize:"25px"}}>The service charges a fee to event organizers in<br/>exchange for online ticketing services, unless<br/> the event is free.</p>
            <button style={{backgroundColor:"#A6A4A4", width:"150px", height:"30px", marginLeft:"65%"}}>Download</button>
        </div>
        </div>
    </section>
            <Footer />
        </div>
    )
}
export default Contactus;