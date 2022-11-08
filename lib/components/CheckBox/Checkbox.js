import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';


export default function CheckBox({size, color, checked, text}) {
  return (
    <div>
    <h1>{text}</h1>
    <Checkbox 
      size = {size}
      color = {color}
      checked = {checked}
    />
    <Checkbox 
      size = {size}
      color = {color}
      checked = {checked}
    />
    <Checkbox 
      size = {size}
      color = {color}
      checked = {checked}
    />
    </div>
  );
}

Checkbox.propTypes = {
    size : PropTypes.any,
    color : PropTypes.string,
    checked : PropTypes.bool,
    text : PropTypes.string,

  };