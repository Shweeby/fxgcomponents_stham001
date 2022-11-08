import React from 'react';
import BoutonsFlottants from '../lib/components/BoutonsFlottants/BoutonsFlottants.js';

export default {
  component: BoutonsFlottants,
  title: 'Components-TP1/BoutonsFlottants',
};

const Template = (args) => <BoutonsFlottants {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    text : "here",
    marginRight : 20,
    color : "secondary",
    variant: "circular",
    size : "xlarge",
};

export const Size = Template.bind({});
Size.args = {
    text : "Hello!!!!",
    marginRight : 20,
    color : "primary",
    disabled : false,
};

export const Deselect = Template.bind({});
Deselect.args = {
    text : "click me",
    variant: "extended",
    marginRight : 20,
    color : "primary",
    disabled : true,
};
