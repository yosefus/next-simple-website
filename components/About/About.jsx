import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <div
          data-aos="fade-down"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className={styles.img}
        >
          <span></span>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" className={styles.text}>
          <h4>about us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quos assumenda tenetur
            recusandae nemo eos consequuntur laudantium dicta ullam, fugiat similique itaque nulla harum
            excepturi sequi aliquam beatae suscipit maiores.
          </p>
        </div>
      </div>
      <div className={styles.about}>
        <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" className={styles.text}>
          <h4>why us?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quos assumenda tenetur
            recusandae nemo eos consequuntur laudantium dicta ullam, fugiat similique itaque nulla harum
            excepturi sequi aliquam beatae suscipit maiores.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className={styles.img2}
        >
          <span></span>
        </div>
      </div>
    </>
  );
}
