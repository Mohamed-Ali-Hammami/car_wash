"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';
import styles from '../styles/navbar.module.css';
import ContactUs from './contact_us';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Section gauche */}
        <div className={styles['navbar-left']}>
          <button className={styles['menu-btn']} onClick={toggleSidebar}>
            ☰
          </button>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <span className={styles.title}>
            Lavage-Auto
          </span>
        </div>

        {/* Section droite */}
        <div className={styles['navbar-right']}>

            <button className={styles['contact-btn']}>
            Accueil
            </button>

            <button className={styles['contact-btn']}>
            Services
            </button>

            <button className={styles['contact-btn']}>
            Infos
            </button>



          <button 
            className={styles['contact-btn']} 
            onClick={() => setIsContactOpen(true)}
          >
            Nous contacter
          </button>

        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modal de contact */}
      {isContactOpen && (
        <ContactUs onClose={() => setIsContactOpen(false)} />
      )}
    </>
  );
};

export default Navbar;