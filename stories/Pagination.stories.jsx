import React from 'react';
import Pagination from '../lib/components/Pagination/Pagination.js';

export default {
  component: Pagination,
  title: 'Components-TP1/Pagination',
};

const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color : "primary"
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant : "outlined",
};

export const secondary = Template.bind({});
secondary.args = {
    color : "secondary",
    disabled : true,
};