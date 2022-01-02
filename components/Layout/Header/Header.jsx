import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
