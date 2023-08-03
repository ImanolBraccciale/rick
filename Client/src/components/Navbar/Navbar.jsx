
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
export default function NavBar({ onSearch }) {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
        </div>
        <ul className={`${styles.navLinks} ${styles.centeredLink}`}>
          <li className={styles.gifAbout}>
            <Link to="/about" className={styles.font} >
              About
            </Link>
          </li>
          <li>
            <Link to="/home" className={styles.font} >
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={styles.font} >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.searchContainer}>
        <Search onSearch={onSearch} />
      </div>
    </header >
  );
}
