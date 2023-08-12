import React, { useState } from "react";
import Footer from "../Components/footer";
import Image from "next/image";
import styles from "../styles/login.module.css"; 
import Link from "next/link";

const login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

   // Example POST method implementation:  
   async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    var res = await postData('https://noticewebapi.azurewebsites.net/api/v2/auth/login', {
      'username': username,
      'password': password,
    });
    // Add your login logic here, such as redirecting or displaying messages.
    console.log(res);
  }
  
  return (
    <div className={styles.loginContainer}>

      <Image
        src="/images/1.png"
        alt="Login Banner"
        width={300}
        height={300}
        className={styles.loginImage}
      />
      <h1 className={styles.loginTitle}>LOGIN</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="username"><b>Username:</b></label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            onChange={handlePasswordChange}
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.loginButton}>LOGIN</button>
      </form>
      <section className={styles.downloadApp}>
        <div className={styles.downloadContent}>
          <Image src="/images/Download.jpg" alt="My Image" width={300} height={250} className={styles.downloadImage} />
          <div className={styles.downloadAppContent}>
            <h1>Notice App</h1>
            <p>We offer a secure payment processing system<br/>
            integrated with multiple payment gateways so <br/>
            you can accept payments without any hassle.</p>
            <Link href={'https://play.google.com/store/apps/details?id=io.notice.notice&pli=1'}>
            <button className={styles.downloadButton}>
              Download
              </button>
              </Link>
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default login;
