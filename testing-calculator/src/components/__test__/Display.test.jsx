import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test } from 'vitest';
import Display from '../Display'; 

describe('Display', () => {
    test('should render the value', () => {
        const { getByTestId } = render(<Display value="123" />);
        const displayElement = getByTestId('display');
        expect(displayElement).toBeInTheDocument();
        expect(displayElement).toHaveTextContent('123');
    });

    test('should render empty value', () => {
        const { getByTestId } = render(<Display value="" />);
        const displayElement = getByTestId('display');
        expect(displayElement).toBeInTheDocument();
        expect(displayElement).toHaveTextContent('');
    });

});