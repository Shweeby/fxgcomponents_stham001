import React from 'react';
import Menu from '../lib/components/Menu/Menu.js';

export default {
  component: Menu,
  title: 'Components-TP1/Menu',
};

const Template = (args) => <Menu {...args} />;

export const Menu1 = Template.bind({});
Menu1.args = {
    display: "row",
    alignItems : "right",
    textAlign : "right",
   
};

export const Menu2 = Template.bind({});
Menu2.args = {
    display: "flex",
    alignItems : "center",
    textAlign : "center",
    
};

export const Menu3 = Template.bind({});
Menu3.args = {
    display: "row",
    alignItems : "left",
    textAlign : "left",
    
};