import React from 'react';
import Grid from '../lib/components/Grid/Grid.js';

export default {
  component: Grid,
  title: 'Components-TP1/Grid',
};

const Template = (args) => <Grid {...args} />;

export const Basic1 = Template.bind({});
Basic1.args = {
    spacing : 6,
    xs: 6,
};

export const Basic2 = Template.bind({});
Basic2.args = {
    spacing : 4,
    xs: 8, 
};

export const Basic3 = Template.bind({});
Basic3.args = {
    spacing : 3,
    xs: 3, 
};