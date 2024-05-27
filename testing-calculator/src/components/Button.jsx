import styles from './Button.module.css';
import React from 'react';

const Button = ({ label, onClick, activeKey }) => {
  const isActive = label.toString() === activeKey;
  const buttonClass = isActive ? `${styles.button} ${styles.active}` : styles.button;

  return (
    <button className={buttonClass} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
