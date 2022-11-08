import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';


export default function Bouton({width, variant, text, color}) {
  return (
    <div>
    <h1>Bonjour</h1>
    <Button 
        variant={variant} 
        style = {{width: width}} 
        text = {text}
        color = {color}
        onClick={() => {
            alert('Vous avez cliquer sur un bouton');}}> {text} </Button>
    </div>
  );
}

Bouton.propTypes = {
    width: PropTypes.number,
    variant : PropTypes.any,
    text : PropTypes.string, 
    color : PropTypes.string
  };
