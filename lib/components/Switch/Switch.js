import * as React from 'react';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches({defaultChecked, disabled}) {
  return (
    <div>
      <Switch {...label} defaultChecked={defaultChecked}  />
      <Switch {...label}/>
      <Switch {...label} disabled = {disabled} defaultChecked = {defaultChecked} />
      <Switch {...label} disabled = {disabled} />
    </div>
  );
}

BasicSwitches.PropTypes = {
    defaultChecked : PropTypes.bool,
    disabled : PropTypes.bool,
}