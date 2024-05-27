import { useState } from 'react';
import React from 'react';
import Display from '../components/Display';
import Grid from '../components/Grid';
import styles from './Home.module.css';
import { handleButtonClick } from '../utils/calculatorLogic';
import { useKeyboardInput } from '../utils/useKeyboardInput';

export default function Home() {
  const [displayValue, setDisplayValue] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [nextValueShouldClear, setNextValueShouldClear] = useState(false);

  const activeKey = useKeyboardInput(handleButtonClick, displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear);

  const onButtonClick = (value) => {
    handleButtonClick(value, displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Display value={displayValue} />
        <Grid onButtonClick={onButtonClick} activeKey={activeKey} />
      </div>
    </div>
  );
}