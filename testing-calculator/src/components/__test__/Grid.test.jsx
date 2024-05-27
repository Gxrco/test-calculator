import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, vi } from 'vitest';
import Grid from '../Grid';

describe('Grid', () => {
  const buttonsData = [
    { label: 'C', value: 'clear' },
    { label: '+/-', value: 'toggleSign' },
    { label: '⌫', value: 'backspace' },
    { label: '/', value: '/' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '*', value: '*' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '-', value: '-' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '+', value: '+' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: '=', value: '=' }
  ];

  test('should render all buttons', () => {
    const { getByTestId, getByText } = render(<Grid onButtonClick={() => {}} />);
    const gridElement = getByTestId('grid');
    expect(gridElement).toBeInTheDocument();

    buttonsData.forEach(button => {
      expect(getByText(button.label)).toBeInTheDocument();
    });
  });

  test('should call onButtonClick with the correct value', () => {
    const onButtonClickMock = vi.fn();
    const { getByText } = render(<Grid onButtonClick={onButtonClickMock} />);

    buttonsData.forEach(button => {
      const buttonElement = getByText(button.label);
      fireEvent.click(buttonElement);
      expect(onButtonClickMock).toHaveBeenCalledWith(button.value);
    });

    // Ensure the mock function is called the correct number of times
    expect(onButtonClickMock).toHaveBeenCalledTimes(buttonsData.length);
  });
});