import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const App = () => {
  
  let [stuff, stuffupdate] = useState([]);
  const [update, setUpdate] = useState(false);

  return (
    <>
    <div class="flex h-screen flex-col m-5 items-center">
      <h1 class="text-4xl m-5">Tehtävä 6</h1>
      <p class="m-3">press textbox when ready</p>
      <TextField id="outlined-basic" onClick={(e)=>{if (e.target.value !== "") {stuff.push(e.target.value);} stuffupdate(stuff); setUpdate(!update)}} label="kirjoita mitä olet oppinut" variant="outlined" />
      {stuff.map(thingy =>  <h1>{thingy}</h1>)}
    </div>

    </> 
  )
}

export default App
