import React from 'react';
import styles from './Products.module.css';
import { AiFillCamera } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { GiRocketFlight } from 'react-icons/gi';
import Card from './Card';

const data = [
  { title: 'Photography', icon: <AiFillCamera /> },
  { title: 'Creativity', icon: <GiRocketFlight /> },
  { title: 'Development', icon: <FaLaptopCode /> },
];
export default function Products() {
  return (
    <div className={styles.products}>
      {data.map((item, i) => (
        <Card key={`k${i}`} title={item.title} icon={item.icon} />
      ))}
    </div>
  );
}
