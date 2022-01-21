import React from "react";
import { SOCIAL_LINKS } from "../Landing/data";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.Footer_container}>
        <div className={styles.Footer_brand}>TOSIN</div>
        <div className={styles.Footer_links}>
          {SOCIAL_LINKS.map(({ id, link, icon }) => {
            return (
              <a
                href={link}
                key={id}
                className={styles.Footer_links_item}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.Footer_copyright}>
        <p>
          copyright © {new Date().getFullYear()} Tosin Sobogun. All rights
          reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
