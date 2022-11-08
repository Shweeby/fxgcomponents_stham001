import React from 'react';
import Alert from '../lib/components/Alert/Alert.js';

export default {
  component: Alert,
  title: 'Components-TP1/Alert',
};

const Template = (args) => <Alert {...args} />;

export const Warning = Template.bind({});
Warning.args = {
    severity : "warning",
    text : "This is a warning alert — check it out!"
};

export const Erreur = Template.bind({});
Erreur.args = {
    severity : "error",
    text : "This is an error alert — check it out!",
};

export const Success = Template.bind({});
Success.args = {
    severity : "success",
    text : "This is a success alert — check it out!"
};