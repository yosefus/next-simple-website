import React from 'react';
import styles from './SectionTop.module.css';

export default function SectionTop({ title, id }) {
  return (
    <div id={id} className={styles.section}>
      <h3>{title}</h3>
    </div>
  );
}
