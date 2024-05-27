import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '5',
  onClick: action('button-click'),
};

export const ClickableButton = () => (
  <Button label="Click Me" onClick={action('button-click')} />
);

export const DifferentLabels = () => (
  <div className="yes">
    {['1', '2', '3', '+', '-', '*', '/'].map((label) => (
      <Button key={label} label={label} onClick={action('button-click')} />
    ))}
  </div>
);

export const ButtonWithLongLabel = Template.bind({});
ButtonWithLongLabel.args = {
  label: 'Long Label',
  onClick: action('button-click'),
};

export const TestButtonClick = () => {
  const handleClick = (label) => {
    console.log(`Button clicked: ${label}`);
    action('button-click')(label);
  };

  return <Button label="Test Click" onClick={handleClick} />;
};