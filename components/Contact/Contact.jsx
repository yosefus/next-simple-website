import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FiSend } from 'react-icons/fi';
import { FaRegKissWinkHeart } from 'react-icons/fa';

export default function Contact() {
  const [thanksNote, setThanksNote] = useState(false);

  const submitFormFn = (e) => {
    e.preventDefault();
    setThanksNote(true);
    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <form onSubmit={submitFormFn}>
          <input required placeholder="E-mail" type="email" name="email" />
          <textarea
            required
            placeholder="I want to tell you..."
            name="textAres"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">
            <FiSend />
          </button>
        </form>
      </div>

      {thanksNote && (
        <div onClick={() => setThanksNote(false)} className={styles.msg}>
          <div
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <h3>
              <FaRegKissWinkHeart />
              Thanks so much for your response! <br /> have a really nice day
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
