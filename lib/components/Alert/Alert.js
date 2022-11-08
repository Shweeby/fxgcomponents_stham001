import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function BasicAlerts({severity, text}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{text}</Alert>
      <Alert severity={severity}>{text}</Alert>
      <Alert severity="info">{text}This is an info alert — check it out!</Alert>
    </Stack>
  );
}

BasicAlerts.PropTypes ={
    severity : PropTypes.string,
    text : PropTypes.string,
}