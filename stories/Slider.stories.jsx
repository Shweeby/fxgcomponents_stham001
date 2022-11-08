import React from 'react';
import Slider from '../lib/components/Slider/Slider.js';

export default {
  component: Slider,
  title: 'Components-TP1/Slider',
};

const Template = (args) => <Slider {...args} />;

export const Continuous = Template.bind({});
Continuous.args = {
    color : "primary",
};

export const Warning = Template.bind({});
Warning.args = {
    color : "warning",
    track : "inverted",
    orientation : "vertical",
    height : 200

};
export const Desactiver = Template.bind({});
Desactiver.args = {
    color : "secondary",
    track : "inverted",
    disabled: true
};
