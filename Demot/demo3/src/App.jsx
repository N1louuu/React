
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';


const App = () => {


  return (
    <>
    <div className="flex flex-col h-screen items-center button-wrapper">
      <h1>hel o</h1>
      <Checkbox
        
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
    </>
  );
};

export default App
