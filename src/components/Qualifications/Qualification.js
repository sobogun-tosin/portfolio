import React from "react";
import { QUALIFICATIONS } from "./data";
import styles from "./Qualification.module.scss";
import cx from "classnames";

const Qualification = ({ id }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className={styles.Qualification} id={id}>
      <div className={styles.Qualification_header}>
        <h3>Qualifications</h3>
        <p>My journey so far</p>
      </div>
      <div className={styles.Qualification_tab}>
        <div className={cx(styles.Qualification_tab_header)}>
          {QUALIFICATIONS.map((item, index) => {
            const isActive = index === activeIndex;
            const { title, icon } = item;
            return (
              <button
                onClick={() => setActiveIndex(index)}
                className={cx(styles.Qualification_tab_header_item, {
                  [styles.Qualification_tab_header_item_active]: isActive,
                })}
                key={index}
              >
                {icon} {title}
              </button>
            );
          })}
        </div>
        <div className={cx(styles.Qualification_tab_content)}>
          {QUALIFICATIONS[activeIndex] &&
            QUALIFICATIONS[activeIndex].contents.map(
              ({ name, year }, index) => {
                return (
                  <div
                    key={index}
                    className={styles.Qualification_tab_content_item}
                  >
                    <p>{name}</p> <span>{year}</span>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
