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
          Hi, my name is Sobogun Tosin. A very committed, motivated and
          enthusiastic frontend developer, with the aspiration to learn more and
          grow not only as a frontend developer. I'm proficient in react
          framework, understand and can interpret designs, integrating api and
          ability in optimising web functionalities that improves data retrieval
          and work efficiency.
        </p>
        <div className={styles.About_content_container}>
          <div className={styles.About_content_container_img}>
            <img src={tosin} alt="Tosin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
