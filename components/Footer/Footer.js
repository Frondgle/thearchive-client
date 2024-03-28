import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>©️ {year} Frondgle Solutions</div>
  )
}
