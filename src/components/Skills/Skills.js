import React from "react";
import { SKILLS } from "./data";
import styles from "./Skills.module.scss";

const Skills = ({ id }) => {
  return (
    <div className={styles.Skills} id={id}>
      <div className={styles.Skills_container}>
        <div className={styles.Skills_header}>
          <h3>Skills</h3>
          <p>What I can do.</p>
        </div>
        <div className={styles.Skills_content}>
          {SKILLS.map((item, index) => {
            const { title, value, icon } = item;
            return (
              <div className={styles.Skills_content_item} key={index}>
                <div className={styles.Skills_content_item_text}>
                  <p>{title}</p> <i>{icon}</i>
                </div>
                <div className={`progressbar`}>
                  <div style={{ width: `${value}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
