import React from 'react';
import { action } from '@storybook/addon-actions';
import Grid from '../components/Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  onButtonClick: action('button-click'),
};

export const ClickButton = () => (
  <Grid onButtonClick={action('button-click')} />
);

