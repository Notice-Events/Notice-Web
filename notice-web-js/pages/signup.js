import React, { useState } from "react";
import Footer from "../Components/footer";
import Image from "next/image";  

const signup = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameChange = (e) => {
    setusername(e.target.value);
  };

  const handleemailChange = (e) => {
    setemail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the data to an API endpoint.
    console.log('username:', username);
    console.log('Password:', password);
    console.log('email:', email);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily:"sans-serif"}}>
      <Image
        src="/images/1.png"
        alt="Login Banner"
        width={300}
        height={300}
        style={{marginBottom:'-80px', marginLeft:"120px"}}

      />
      <h3 style={{ fontSize: 50, fontWeight: 'bold', marginLeft:"120px"}}>SIGN UP</h3>
      <form onSubmit={handleSubmit} style={{ width: '300px', marginTop: '0px', marginLeft:"-200px"}}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{fontFamily:"sans-serif"}}><b>Username:</b></label>
          <input
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={handleusernameChange}
            style={{ width: '200%', padding: '15px', border: '1px solid #ccc', borderRadius: '4px', marginTop:"10px"}}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{fontFamily:"sans-serif"}}><b>Email:</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            value={username}
            onChange={handleemailChange}
            style={{ width: '200%', padding: '15px', border: '1px solid #ccc', borderRadius: '4px', marginTop:"10px"}}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{fontFamily:"sans-serif"}}><b>Password:</b></label>
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
            marginBottom:'300px',
          }}
        >
          <b>Sign up</b>
        </button>
      </form>
      <Footer />
      <div style={{marginTop:"70px"}}>

            </div>
    </div>
  );
};

export default signup;
