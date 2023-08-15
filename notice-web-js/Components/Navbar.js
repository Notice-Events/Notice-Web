import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <ul className={styles.navUl}>
          <div className={styles.navItemRight}>
            <select className={styles.languageDropdown}>
              <option value="en">En</option>
              <option value="fr">Fr</option>
              <option value="es">Es</option>
            </select>
          </div>
          <li className={styles.navItem}>
            <Link href="/login">
              <b className={styles.navLinkBlack}>LOGIN</b>
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navItemSignup}`}>
            <Link href="/signup">
              <b>SIGNUP</b>
            </Link>
          </li>
        </ul>
      </div>
      <ul className={styles.navUlCenter}>
        <li className={styles.navItemLogo}>
          <Image
            src="/images/1.png"
            alt="Login Banner"
            width={150}
            height={150}
            priority
          />
        </li>
        <div className={styles.navigation} >
        <li className={styles.navItem}>
          <Link href="/">
            <b style={{marginLeft:"-700px"}}>Home</b>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/create_event">
            <b style={{marginLeft:"-600px"}}>Create an Event</b>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <b style={{marginLeft:"-450px"}}>About</b>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contactus">
            <b style={{marginLeft:"-350px"}}>Contact Us</b>
          </Link>
        </li>
        <li className={styles.navsearch}>
          <Link href="#" style={{marginLeft:"-150px", color:"black", backgroundcolor:"white"}}>
            <FontAwesomeIcon icon={faSearch} className={styles.navSearchIcon} />
          </Link>
        </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
