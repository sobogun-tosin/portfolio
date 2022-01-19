import React from "react";
import { LINKS } from "./data";
import styles from "./Navbar.module.scss";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 90,
    });
  };
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_container}>
        <h1 className={styles.Navbar_brand}>
          <a href="#home">TOSIN</a>
        </h1>
        <ul className={styles.Navbar_links}>
          {LINKS &&
            LINKS.map((link) => {
              const { id, url, title } = link;
              return (
                <li key={id}>
                  <a
                    href={url}
                    className={styles.Navbar_links_item}
                    onClick={handleClick}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
        </ul>
        <TiThMenu
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={styles.Navbar_linkBtn}
        />
      </div>
      {isNavOpen && (
        <ul className={styles.Navbar_sublinks}>
          {LINKS &&
            LINKS.map((link) => {
              const { id, url, title } = link;
              return (
                <li key={id}>
                  <a
                    href={url}
                    className={styles.Navbar_links_item}
                    onClick={handleClick}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
