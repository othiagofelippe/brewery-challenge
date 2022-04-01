import React from "react";
import styles from "./Header.module.css";
// import Bear from "../assets/bear.png";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul>
          <li>products</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
