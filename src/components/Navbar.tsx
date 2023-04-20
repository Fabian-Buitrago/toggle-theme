import React from "react";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  // it can be either light or dark
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      <h1 className="text">logo</h1>

      <ul className="text">
        <li>About</li>
        <li>Design</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
