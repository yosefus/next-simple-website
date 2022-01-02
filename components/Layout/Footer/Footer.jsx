import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <a>yosefus flavius</a>
      </Link>
    </div>
  );
}
