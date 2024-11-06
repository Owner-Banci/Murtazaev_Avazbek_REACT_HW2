import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <ul>
      <li className={styles.navItem}>Товары</li>
      <li className={styles.navItem}>Склады</li>
      <li className={styles.navItem}>О системе</li>
      <li className={styles.navItem}>Личная страница</li>
    </ul>
  </nav>
);

export default Navbar;