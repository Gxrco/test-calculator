import React, { useState } from 'react';
import Button from './Button';
import styles from './Grid.module.css';

const buttonsData = {
  "buttons": [
    { "label": "C", "value": "clear" },
    { "label": "+/-", "value": "toggleSign" },
    { "label": "⌫", "value": "backspace" },
    { "label": "/", "value": "/" },
    { "label": "7", "value": "7" },
    { "label": "8", "value": "8" },
    { "label": "9", "value": "9" },
    { "label": "*", "value": "*" },
    { "label": "4", "value": "4" },
    { "label": "5", "value": "5" },
    { "label": "6", "value": "6" },
    { "label": "-", "value": "-" },
    { "label": "1", "value": "1" },
    { "label": "2", "value": "2" },
    { "label": "3", "value": "3" },
    { "label": "+", "value": "+" },
    { "label": "0", "value": "0" },
    { "label": ".", "value": "." },
    { "label": "=", "value": "=" }
  ]
};

const Grid = ({ onButtonClick, activeKey }) => {
  const [buttons, setButtons] = useState(buttonsData.buttons);

  return (
    <div data-testid="grid" className={styles.grid}>
      {buttons.map((button) => (
        <Button key={button.value} label={button.label} onClick={() => onButtonClick(button.value)} activeKey={activeKey} />
      ))}
    </div>
  );
};

export default Grid;