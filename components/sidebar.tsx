import React from 'react';
import styles from '../styles/components/Sidebar.module.scss';
import logo from "@/public/Group 1171286572.png"
import logo1 from "@/public/Group 1171286573.svg"

import Image from 'next/image';
const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
      <Image src={logo} alt="Logo"/>
        </div>
      <div className={styles.logo}>
      <Image src={logo1} alt="Logo"/>
        
        </div>
      <div className={styles.bottom}>
        <div className={styles.icon}>FL</div>
      </div>
    </aside>
  );
};

export default Sidebar;