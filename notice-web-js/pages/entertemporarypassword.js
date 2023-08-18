import React, { useState } from 'react';
import styles from '../styles/enterTemporaryPassword.module.css';
import { useRouter } from 'next/router';
import Footer from '../Components/footer';
import Image from "next/image";

const EnterTemporaryPassword = () => {
  const [temporaryPassword, setTemporaryPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { username } = router.query;

  const handlePasswordChange = (e) => {
    setTemporaryPassword(e.target.value);
  };

  async function submitTemporaryPassword(password) {
    const url = 'https://noticewebapi.azurewebsites.net/api/v2/auth/resetpassword';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          temporaryPassword: password,
        }),
      });

      if (response.status === 200) {
        setMessage('Password reset successful.');
      } else {
        setMessage('Password reset failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitTemporaryPassword(temporaryPassword);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.PasswordContainer}>
      <Image
        src="/images/1.png"
        alt="Login Banner"
        width={250}
        height={250}
        className={styles.loginImage}
        priority
      />
      <h6 className={styles.PasswordTitle}>Enter Temporary Password</h6>
      <form onSubmit={handleSubmit} className={styles.PasswordForm}>
        <div className={styles.inputContainer}>
          <input
            type="password"
            id="temporaryPassword"
            placeholder="Enter temporary password"
            value={temporaryPassword}
            onChange={handlePasswordChange}
            className={styles.PasswordInputField}
          />
        </div>
        <div id="message">{message}</div>
        <button
          type="submit"
          className={styles.PasswordButton}
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default EnterTemporaryPassword;
