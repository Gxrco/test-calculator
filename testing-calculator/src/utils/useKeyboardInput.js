import { useEffect, useState } from 'react';

export const useKeyboardInput = (handleButtonClick, displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear) => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace'];
      if (validKeys.includes(key)) {
        setActiveKey(key);
        if (key === 'Enter') {
          handleButtonClick('=', displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear);
        } else if (key === 'Backspace') {
          handleButtonClick('backspace', displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear);
        } else {
          handleButtonClick(key, displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', () => setActiveKey(null)); // clear active key on key up

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', () => setActiveKey(null));
    };
  }, [handleButtonClick, displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear]);

  return activeKey;
};