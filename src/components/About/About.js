import React from "react";
import styles from "./About.module.scss";
import tosin from "../../assets/images/background/tosin.png";

const About = ({ id }) => {
  return (
    <div className={styles.About} id={id}>
      <div className={styles.About_header}>
        <h3>About Tosin</h3>
        <p></p>
      </div>
      <div className={styles.About_content}>
        <p className={styles.About_content_description}>
          Hi, my name is Sobogun Tosin. A very committed, motivated and zealous
          frontend developer.
        </p>
        <div className={styles.About_img_container}>
          <div className={styles.About_img}>
            <img src={tosin} alt="Tosin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
