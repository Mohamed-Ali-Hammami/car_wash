"use client";
import React, { useState } from 'react';
import styles from '../styles/sidebar.module.css';
import { FaPhone, FaEnvelope, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import ContactUs from './contact_us';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <div
      className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : ''}`}
      onClick={onClose} // Clicking the overlay calls onClose
    >
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        {/* Logo Section */}
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Sidebar Title */}
        <span className={styles.title}>Lavage-Auto</span>

        {/* Navigation Buttons */}
        <div className={styles.navbarRight}>
          <button className={styles.contactBtn}>Accueil</button>
          <button className={styles.contactBtn}>Services</button>
          <button className={styles.contactBtn}>Infos</button>
          <button 
            className={styles.contactBtn} 
            onClick={() => setIsContactOpen(true)}
          >
            Nous contacter
          </button>

          {/* Contact Icons Section */}
          <h2 className={styles.title}>Nous joindre</h2>
          <div className={styles.contactIcons}>
            <a href="tel:1234567890" title="Call us">
              <FaPhone />
            </a>
            <a href="mailto:info@example.com" title="Email us">
              <FaEnvelope />
            </a>
            <a
              href="https://www.youtube.com/channel/example"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our YouTube channel"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              title="Like us on Facebook"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Modal de Contact Us */}
          {isContactOpen && (
            <ContactUs onClose={() => setIsContactOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
