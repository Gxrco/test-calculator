export function handleButtonClick(value, displayValue, setDisplayValue, setPreviousValue, previousValue, setOperator, operator, setNextValueShouldClear, nextValueShouldClear) {
  const isOperator = (val) => ['+', '-', '*', '/'].includes(val);

  const handleResult = (result) => {
    // Asegúrate de que result es un número
    result = Number(result);

    if (result > 999999999) {
      setDisplayValue('ERROR');
    } else {
      let resultStr = result.toString();

      if (resultStr.includes('.')) {
        // Limita el número de caracteres a 9 incluyendo el punto
        resultStr = result.toFixed(9 - resultStr.split('.')[0].length - 1);
        // Quita los ceros innecesarios al final
        resultStr = parseFloat(resultStr).toString();
      }

      if (resultStr.length > 9) {
        setDisplayValue('ERROR');
      } else {
        setDisplayValue(resultStr);
      }
    }
  };

  if (value === 'clear') {
    setDisplayValue('0'); 
    setPreviousValue(null);
    setOperator(null);
    setNextValueShouldClear(false);
    return;
  }

  if (value === 'toggleSign') {
    if (displayValue !== '0' && displayValue !== '' && displayValue.length < 9) {
      setDisplayValue((prev) => (parseFloat(prev) * -1).toString());
    }
    return; 
  }

  if (value === 'backspace') {
    setDisplayValue((prev) => prev.length > 1 ? prev.slice(0, -1) : '0');
    return;
  }

  if (value === '=') {
    if (previousValue !== null && operator !== null) {
      try {
        const result = eval(`${previousValue} ${operator} ${displayValue}`);
        handleResult(result);
        setPreviousValue(null);
        setOperator(null);
        setNextValueShouldClear(false);
      } catch {
        setDisplayValue('ERROR');
      }
    }
    return;
  }

  if (isOperator(value)) {
    if (previousValue === null) {
      setPreviousValue(displayValue);
      setOperator(value);
      setNextValueShouldClear(true);
    } else if (operator !== null) {
      try {
        const result = eval(`${previousValue} ${operator} ${displayValue}`);
        handleResult(result);
        setPreviousValue(result);
        setOperator(value);
        setNextValueShouldClear(true);
      } catch {
        setDisplayValue('ERROR');
      }
    }
    return;
  }

  // Default case for number or decimal point
  if (nextValueShouldClear || displayValue === 'ERROR') {
    setDisplayValue(value);
    setNextValueShouldClear(false);
  } else {
    if (displayValue.length >= 9) {
      return; // prevent more than 9 digits
    }
    if (displayValue === '0' && value === '0') {
      return; // prevent leading zeros
    }
    setDisplayValue((prev) => (prev === '0' && value !== '.' ? value : prev + value));
  }
}