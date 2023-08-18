import React, { useState } from 'react';
import styles from '../styles/forgotPassword.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Footer from '../Components/footer';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  async function checkUserExists(data) {
    const url = 'https://noticewebapi.azurewebsites.net/api/v2/auth/forgotpassword'; // Corrected URL
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      return { status: response.status, data: jsonData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function handlePasswordResetSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await checkUserExists({
        username,
      });
      console.log('api response:', res);
      if (res.status === 200 || res.status === 201) {
        router.push(`/entertemporarypassword?username=${username}`);
      } else {
        setMessage('User does not exist.');
      }
    } catch (error) {
      setMessage('An error occurred.');
      console.error(error);
    } finally {
      setIsLoading(false);
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
          <label htmlFor="username">
            <b>Username:</b>
          </label>
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
        <button
          type="submit"
          className={styles.ResetButton}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Reset Password'}
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
