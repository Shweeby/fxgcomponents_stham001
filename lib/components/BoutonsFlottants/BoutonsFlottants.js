import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import PropTypes from 'prop-types';


export default function BoutonsFlottants({text, color, size, marginRight, variant, disabled}) {
  return (
    <div>
    <h1>{text}</h1>
    <Fab variant= {variant}  size={size} color={color} aria-label="add" style= {{marginRight:marginRight}}>
        <AddIcon/>
    </Fab>
    <Fab size={size} variant= {variant}  color={color} aria-label="edit" style= {{marginRight:marginRight}}>
        <EditIcon />
    </Fab>
    <Fab variant="extended"  size={size} color={color} aria-label="add" style= {{marginRight:marginRight}}>
    <NavigationIcon sx={{ mr: 1 }} />
        Navigate
    </Fab>
    <Fab color={color} variant= {variant} disabled = {disabled} aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
  );
}


BoutonsFlottants.propTypes = {
    color : PropTypes.string,
    size : PropTypes.string,
    variant : PropTypes.string, 
    text : PropTypes.string,
    disabled : PropTypes.bool,
    marginRight : PropTypes.number
  };