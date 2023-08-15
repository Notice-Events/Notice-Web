import React, { useState } from 'react';
import styles from '../styles/forgotPassword.module.css';
import { useRouter } from 'next/router'; // Import the router
import Image from "next/image";
import Footer from "../Components/footer";

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Initialize router

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  async function Username(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }

  async function handlePasswordResetSubmit(e) {
    e.preventDefault();
    try {
      const response = await Username('https://noticewebapi.azurewebsites.net/api/v2/auth/forgotpassword', {
        'username': username,
      });
      if (response.status === 200 && jsonData.exists) {
        router.push(`/enter-temporary-password?username=${username}`);
      } else {
        setMessage('User does not exist.');
      }
    } catch (error) {
      setMessage('User does not exist.');
      console.error(error);
    }
  }

  return (
    <div className={styles.ResetContainer}>
      <Image
        src="/images/1.png"
        alt="Login Banner"
        width={250}
        height={250}
        className={styles.loginImage}
        priority
      />
      <h6 className={styles.ResetTitle}>Reset Password</h6>
      <form onSubmit={handlePasswordResetSubmit} className={styles.ResetForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="username"><b>Username:</b></label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            className={styles.ResetinputField}
          />
        </div>
        <div id="message">{message}</div>
        <button type="submit" className={styles.ResetButton}>Reset Password</button>
      </form>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
