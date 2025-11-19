import React from 'react';
import styles from '../styles/components/Header.module.scss';
import Image from 'next/image';
import header from '@/public/Vector.svg'
const Header: React.FC = () => {

    const companyInformation= {
        title: 'RainFocus Summit',
        date: 'December 15th',
        location: 'Lehi, Utah',
      }
  return (
    <header className={styles.header}>
      <div className={styles.eventInfo}>
        <div className={styles.eventLogo}>
          <Image src={header} alt='' />
        </div>

        <div className={styles.eventDetails}>
          <h1>{companyInformation.title}</h1>
          <p>{companyInformation.date}</p>
          <p>{companyInformation.location}</p>
        </div>
      </div>

      <button className={styles.editBtn}>
        Edit event
      </button>
    </header>
  );
};

export default Header;