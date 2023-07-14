import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav} style={{ margin: 0, padding: 0, width: '100%' }}>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <div className={styles.navItemRight}>
            <select className={styles.languageDropdown}>
              <option value="en">En</option>
              <option value="fr">Fr</option>
              <option value="es">Es</option>
              {/* Add more language options as needed */}
            </select>
          </div>
          <li className={styles.navItem}>
            <Link href="#">
              <b>LOGIN</b>
            </Link>
          </li>
          <li className={styles.navItem} style={{ backgroundColor: "grey", width: "100px", textAlign: "center", marginLeft: "10px", fontSize: "20px" }}>
            <Link href="#">
              <b>SIGNUP</b>
            </Link>
          </li>
        </ul>
      </div>
      <ul style={{ justifyContent: 'center', marginTop: '20px' }}>
        <li style={{ marginRight: '360px', marginLeft: "-160px", fontFamily: "sans-serif" }}>
          <b>Notice (LOGO)</b>
        </li>
        <li className={styles.navItem}>
          <Link href="/home">
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
        <li className={styles.navItem} style={{ backgroundColor: "#DEDEDE", width: "30px", textAlign: "center", marginLeft: "10px", fontSize: "20px", borderRadius:"50%" }}>
          <Link href="#">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
