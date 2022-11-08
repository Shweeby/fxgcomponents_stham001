import React from 'react';
import Autocomplete from '../lib/components/Autocomplete/Autocomplete.js';

export default {
  component: Autocomplete,
  title: 'Components-TP1/Autocomplete',
};

const Template = (args) => <Autocomplete {...args} />;

export const Pays = Template.bind({});
Pays.args = {
    text : "Choisissez l'un des 248 pays.",
    
};

export const PaysDesactive = Template.bind({});
PaysDesactive.args = {
    text : "Selection désactivée",
    disabled : true
};

export const DisableClear = Template.bind({});
DisableClear.args = {
    text : "Suppression désactivée",
    disableCloseOnSelect : true,
    disableClearable : true, //Pour empecher de supprimer avec le symbole "x"
};
