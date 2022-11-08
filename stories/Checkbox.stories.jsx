import React from 'react';
import CheckBox from '../lib/components/CheckBox/Checkbox.js';

export default {
  component: CheckBox,
  title: 'Components-TP1/CheckBox',
};

const Template = (args) => <CheckBox {...args} />;

export const TaillePetite = Template.bind({});
TaillePetite.args = {
    size : 'small',
    color : 'secondary',
    checked : true,
    text : "Tu peux changer le titre 😃!!!!" 
};

export const TailleGrande = Template.bind({});
TailleGrande.args = {
    size : 'large',
};

export const TailleMoyenne = Template.bind({});
TailleMoyenne.args = {
    size : 'medium',
    checked : true,
    color : "warning"
};