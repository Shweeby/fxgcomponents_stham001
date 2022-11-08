import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gridd({spacing, xs}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={spacing}>
        <Grid xs={xs}>
          <Item>1</Item>
        </Grid>
        <Grid xs={xs}>
          <Item>2</Item>
        </Grid>
        <Grid xs={xs}>
          <Item>3</Item>
        </Grid>
        <Grid xs={xs}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

Gridd.propTypes = {
    spacing : PropTypes.number,
    xs : PropTypes.number
  };
