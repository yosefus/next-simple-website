import React from 'react';
import styles from './Products.module.css';

export default function Card({ icon, title }) {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      className={styles.card}
    >
      <div className={styles.icon_box}>{icon}</div>
      <div className={styles.text_card}>
        <h6>{title}</h6>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia debitis quod explicabo iusto
          culpa!
        </p>
        <h5>Read More...</h5>
      </div>
    </div>
  );
}
