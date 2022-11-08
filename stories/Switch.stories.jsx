import React from 'react';
import Switch from '../lib/components/Switch/Switch.js';

export default {
  component: Switch,
  title: 'Components-TP1/Switch',
};

const Template = (args) => <Switch {...args} />;

export const Basic1 = Template.bind({});
Basic1.args = {
    disabled : true,
    defaultChecked : true,
   
};

export const Basic2 = Template.bind({});
Basic2.args = {
    disabled : false,
    defaultChecked : false,
   
};

export const Basic3 = Template.bind({});
Basic3.args = {
    disabled : false,
    defaultChecked : true,
   
};