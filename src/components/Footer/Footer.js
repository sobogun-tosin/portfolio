import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.Footer_container}>
        <div className={styles.Footer_brand}>TOSIN</div>
        <div className="">something</div>
        <div className="">Links</div>
      </div>
    </section>
  );
};

export default Footer;
