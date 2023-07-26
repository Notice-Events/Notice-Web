import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav} style={{ margin: 0, padding: 0, width: '100%', color:"white"}}>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <div className={styles.navItemRight}>
            <select className={styles.languageDropdown}>
              <option value="en">En</option>
              <option value="fr">Fr</option>
              <option value="es">Es</option>
            </select>
          </div>
          <li className={styles.navItem}>
            <Link href="/login">
              <b style={{color:"BLACK"}}>LOGIN</b>
            </Link>
          </li>
          <li className={styles.navItem} style={{ backgroundColor: "black", width: "100px", textAlign: "center", marginLeft: "10px", fontSize: "20px" }}>
            <Link href="/signup">
              <b>SIGNUP</b>
            </Link>
          </li>
        </ul>
      </div>
      <ul style={{ justifyContent: 'center', }}>
        <li style={{ marginRight: '400px', marginLeft: "-350px", fontFamily: "sans-serif",marginTop:"-50px" }}>
        <Image
        src="/images/1.png"
        alt="Login Banner"
        width={150}
        height={150}
      />
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <b>Home</b>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/create_event">
            <b>Create an Event</b>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <b>About</b>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contactus">
            <b>Contact Us</b>
          </Link>
        </li>
        <li className={styles.navsearch} style={{ backgroundColor: "white", width: "30px",height:"25px", textAlign: "center", marginLeft: "10px", fontSize: "20px", borderRadius:"50%",}}>
          <Link href="#">
            <FontAwesomeIcon icon={faSearch} color='black' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
