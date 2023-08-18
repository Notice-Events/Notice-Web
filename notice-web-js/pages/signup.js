import React, { useState } from "react";
import Footer from "../Components/footer";
import Image from "next/image";
import styles from "../styles/signup.module.css";
import { useRouter } from 'next/router';

const Signup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  async function Signup(url,data){
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
  async function handleSubmit (e){
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage('');
      return;
    }
      try{
        const res = await Signup('https://noticewebapi.azurewebsites.net/api/v2/auth/register', {
      'firstName':firstName,
      'LastName':lastName,
      'email': email,
      'phonenumber':phoneNumber,
      'username' : username,
      'location':location,
      'password': password,
      'confirmPassword': confirmPassword,
    });
      if (res.status === 200) {
      setSuccessMessage("Registration successful!");
      setErrorMessage('');
    } else if (res.status === 409) {
      setErrorMessage("Email already exists. Please use a different email.");
      setSuccessMessage('');
    } else {
      setErrorMessage("An error occurred during signup. Please try again later.");
      setSuccessMessage('');
    }
  } catch (error) {
    console.error('Error signing up:', error);
    setErrorMessage('An error occurred during signup. Please try again later.');
    setSuccessMessage('');
  }
  };

  return (
    <div className={styles.signupContainer}>
      <Image
        src="/images/1.png"
        alt="Login Banner"
        width={200}
        height={200}
        className={styles.loginImage}
        priority
      />
      <h3 className={styles.signupTitle}>SIGN UP</h3>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName"><b>First Name:</b></label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName"><b>Last Name:</b></label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email"><b>Email:</b></label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phoneNumber"><b>Phone Number:</b></label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={styles.inputField}
          />
        </div>
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
          <label htmlFor="location"><b>Location:</b></label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword"><b>Confirm Password:</b></label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.signupButton}>
          <b>Sign up</b>
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;
