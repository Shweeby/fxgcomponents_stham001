import React from 'react';
import Bouton from '../lib/components/Bouton/Bouton.js';

export default {
  component: Bouton,
  title: 'Components-TP1/Bouton',
};

const Template = (args) => <Bouton {...args} />;

export const Primaire = Template.bind({});
Primaire.args = {
    width: 120,
    variant: "contained",
    text : "Bouton 1"
};

export const Secondary = Template.bind({});
Secondary.args = {
    width: 300, 
    variant: "contained",
    text : "Bouton 2",
    color : "secondary"
};

export const Archived = Template.bind({});
Archived.args = {
    width: 600,
    variant: "contained",
    text : "Bouton 3",
    color: "success"
};