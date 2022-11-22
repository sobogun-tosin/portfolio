import React from "react";
import { PROJECTS } from "./data";
import styles from "./Project.module.scss";

const Project = ({ id }) => {
  return (
    <div className={styles.Project} id={id}>
      <div className={styles.Project_container}>
        <div className={styles.Project_header}>
          <h3>Projects</h3>
          <p>My works so far</p>
        </div>
        <div className={styles.Project_content}>
          {PROJECTS.map(({ title, git_url, site_url, avatar }, index) => {
            return (
              <div key={index} className={styles.Project_content_item}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.Project_content_item_img}
                />
                <hr />
                <p className={styles.Project_content_item_title}>{title}</p>
                <div className={styles.Project_content_item_links}>
                  <a
                    href={git_url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.Project_content_item_links_btn}
                  >
                    Souce code
                  </a>
                  <a
                    href={site_url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.Project_content_item_links_btn}
                  >
                    Visit site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
