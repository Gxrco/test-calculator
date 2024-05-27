import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';
import { describe, test } from 'vitest';

describe('Button', () => {
    test('should render the label', () => {
        const { getByText } = render(<Button label="1" />);
        expect(getByText('1')).toBeInTheDocument();
    });

    test('use correctly onClick action to perform function', () => {
        const onClickMock = vi.fn();
        const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
        const buttonElement = getByText('Click me');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });
});