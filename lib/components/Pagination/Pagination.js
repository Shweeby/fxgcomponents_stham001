import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function BasicPagination({variant, color, disabled}) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant = {variant} disabled = {disabled} />
      <Pagination count={10} variant = {variant} color={color} disabled = {disabled} />
      <Pagination count={10} variant = {variant} color= "secondary" disabled = {disabled} />
      <Pagination count={10} variant = {variant} disabled />
    </Stack>
  );
}

BasicPagination.PropTypes = {
    color : PropTypes.string,
    disabled : PropTypes.string,
    variant : PropTypes.string
}
