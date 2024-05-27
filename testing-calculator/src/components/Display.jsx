import React from 'react';
import styles from './Display.module.css';

const Display = ({ value }) => {
  return (
    <div data-testid="display" className={styles.display}>
      {value}
    </div>
  );
};

export default Display;
