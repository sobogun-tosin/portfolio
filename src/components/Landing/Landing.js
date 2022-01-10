import React from "react";
import styles from "./Landing.module.scss";
import { FiSend } from "react-icons/fi";
import { SOCIAL_LINKS } from "./data";

const Landing = () => {
  return (
    <section className={styles.Landing}>
      <div className={styles.Landing_container}>
        <div className={styles.Landing_content}>
          <div className={styles.Landing_content_description}>
            <h2>Hi There, I am</h2>
            <h1>Sobogun Tosin</h1>
            <h3>Frontend developer!</h3>
            <div className={styles.Landing_content_social}>
              {SOCIAL_LINKS.map(({ id, link, icon }) => {
                return (
                  <a
                    href={link}
                    key={id}
                    className={styles.Landing_content_social_link}
                    target="_blank"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
            <button className={styles.Landing_btn}>
              Contact me <FiSend />{" "}
            </button>
          </div>
        </div>
        <div className={styles.Landing_imgContainer}>
          <img src="" alt="Hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
