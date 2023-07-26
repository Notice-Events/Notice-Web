import React, { useState } from "react";
import Footer from "../Components/footer";
import Image from "next/image";
import Navbar from "../Components/Navbar";   

const login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the data to an API endpoint.
    console.log('username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily:"sans-serif"}}>
      <Navbar />
      <Image
        src="/images/1.png"
        alt="Login Banner"
        width={500}
        height={500}
        style={{marginBottom:'-80px'}}
      />
      <h1 style={{ fontSize: 40, fontWeight: 'bold'}}>Login</h1>
      <form onSubmit={handleSubmit} style={{ width: '300px', marginTop: '0px', marginLeft:"-200px"}}>
        <div style={{ marginBottom: '10px' }}>
          <label><b>Username:</b></label>
          <input
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={handleusernameChange}
            style={{ width: '200%', padding: '15px', border: '1px solid #ccc', borderRadius: '4px', marginTop:"10px"}}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label><b>Password:</b></label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={handlePasswordChange}
            style={{ width: '200%', padding: '15px', border: '1px solid #ccc', borderRadius: '4px', marginTop:"10px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: 'black',
            color: 'white',
            width: '210%',
            padding: '15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop:'50px',
          }}
        >
          Login
        </button>
      </form>
      <section
        className="download_app"
        style={{
          width: '78%',
          height: '350px',
          backgroundColor: '#ff3b3f',
          marginLeft: '140px',
          marginTop: '300px',
          display: 'flex',
          fontFamily: 'sans-serif',
          marginBottom: '40px'
        }}
      >
        <div style={{ padding: '60px', display: 'flex' }}>
          <Image src="/images/Download.jpg" alt="My Image" width={300} height={250} style={{ marginRight: '180px' }} />
          <div className="DownloadApp">
            <h1>Notice App</h1>
            <p>The service charges a fee to event organizers in exchange for online ticketing services, unless the event is free.</p>
            <button style={{ backgroundColor: 'black', color: 'white', width: '150px', height: '30px', marginLeft: 'auto' }}>
              Download
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <div style={{marginTop:"70px"}}>

            </div>
    </div>
  );
};

export default login;
