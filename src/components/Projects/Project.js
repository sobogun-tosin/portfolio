import React from "react";
import { PROJECTS } from "./data";
import styles from "./Project.module.scss";

const Project = () => {
  return (
    <div className={styles.Project}>
      <div className={styles.Project_container}>
        <div className={styles.Project_header}>
          <h3>My Projects</h3>
          <p>My works so far</p>
        </div>
        <div className={styles.Project_content}>
          {PROJECTS.map(({ title, git_url, site_url, avatar }, index) => {
            return <div key={index}>{title}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
