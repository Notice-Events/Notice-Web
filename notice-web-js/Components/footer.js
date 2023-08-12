import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styles from "./Footer.module.css"; 

const Footer = () => {
    return (
        <footer className={styles.section4}>
            <div className={styles.Footer}>
                <div>
                    <Image
                        src="/images/2.png"
                        alt="Login Banner"
                        width={180}
                        height={180}
                    />
                </div>
                <section className={styles.socialMediaIcons}>
                    <a href="https://web.facebook.com/profile.php?id=100091284912309" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/company/92527491/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </a>
                </section>
                <div className={styles.quickLinksFooter}>
                    <h4><b>Quick links</b></h4>
                    <ul className={styles.list}>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className={styles.newsletterFooter}>
                    <h4><b>Newsletter</b></h4>
                    <p>Subscribe To Get The Latest Media Updates</p>
                    <button className={styles.newsletterButton}><b>Live chat</b></button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
