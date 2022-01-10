import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_container}>
        <h1 className={styles.Navbar_brand}>
          <a href="#">TOSIN</a>
        </h1>
        <ul className={styles.Navbar_links}>
          <li>
            <a href="#" className={styles.Navbar_links_item}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.Navbar_links_item}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={styles.Navbar_links_item}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" className={styles.Navbar_links_item}>
              Qualifications
            </a>
          </li>
          <li>
            <a href="#" className={styles.Navbar_links_item}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className={styles.Navbar_links_item}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
