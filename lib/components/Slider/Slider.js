import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PropTypes from 'prop-types';

export default function ContinuousSlider({track, color, disabled,orientation, height}) {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200, height: {height}}}>
      <Stack spacing={2}  direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider track = {track} color={color} disabled={disabled} aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider sx={{
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical',
    },
  }} orientation = {orientation} track = {track} color={color} disabled={disabled} defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}

ContinuousSlider.PropTypes = {
    track : PropTypes.string, 
    color : PropTypes.string,
    disabled : PropTypes.bool, 
    orientation : PropTypes.string,
    height : PropTypes.number
}