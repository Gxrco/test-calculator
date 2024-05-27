import React from 'react';
import Display from '../components/Display';

export default {
  title: 'Components/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '123',
};

export const Empty = Template.bind({});
Empty.args = {
  value: '',
};

export const LongValue = Template.bind({});
LongValue.args = {
  value: '1234567890',
};

export const NegativeValue = Template.bind({});
NegativeValue.args = {
  value: '-123',
};

