import React from 'react';
import styles from './Top.module.css';

export default function Top() {
  return (
    <div id="top" className={styles.top}>
      <div className={styles.text}>
        <h1>
          welcome to my <span>website</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, velit.</p>
        <div className={styles.btn_box}>
          <a href="#about">about us</a>
          <a href="#contact">contact us</a>
        </div>
      </div>

      <div className={styles.img_box}>
        <div
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className={styles.one}
        ></div>

        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className={styles.two}
        ></div>

        <div
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className={styles.three}
        ></div>
      </div>
    </div>
  );
}
