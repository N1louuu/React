import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';

function openBlankPage(href) {
  //console.log("!")
  window.open(href,'_blank');
}

const App = () => {
  
  let [stuff, stuffupdate] = useState([]);
  //console.log("start of all stuff: "+stuff)
  const [update, setUpdate] = useState(false);

  const submitHandler = (formData) => {
    const link = formData.get("link");
    const kuvaus = formData.get("kuvaus");
    if (link !== "" && kuvaus !=="") {
      stuff.push({link: link, kuvaus: kuvaus, like: 0});
      stuffupdate(stuff);
    }
   // console.log("stuff: "+stuff)
    setUpdate(!update)
    
  }

  let total = 0
  stuff.forEach(link => {
    total+=link["like"]
  });
  
  const btn = {margin: "5px"}

  return (
    <>
    <div className="flex flex-row m-5 justify-around">
      <form action={submitHandler} className='flex flex-col items-center'>
        <h1 className="text-4xl m-5">Tehtävä 7</h1>
        <label htmlFor="link">linkki</label>
        <TextField name='link'/>
        <label htmlFor="kuvaus">kuvaus</label>
        <TextField name='kuvaus'/>
        <Button sx={btn} variant="contained" onChange={()=>{setUpdate(!update)}} type="submit">valmis</Button>
      </form>

      <div className="flex flex-col items-center m-5">
        <div className='flex flex-row items-center justify-around content-center w-70'>
          <h1 className='text-4xl mb-5'>linkit:</h1>
          <Button sx={btn} onClick={()=>{stuff.sort((firstItem, secondItem) => secondItem.like - firstItem.like); stuffupdate(stuff); setUpdate(!update)}}>sort by likes</Button>
        </div>
        {stuff.map(link => 
        <div className='flex flex-col items-center'>
          <a onClick={()=>{openBlankPage(link["link"]);}} className='text-2xl text-blue-400'>{link["link"]}</a>
          <h1>{link["kuvaus"]}</h1>
          <div className='flex flex-row items-center align-center'>
          <h1>👍{link["like"]}</h1>
          <Button sx={btn} onClick={()=>{stuff[stuff.indexOf(link)]["like"]++; stuffupdate(stuff); setUpdate(!update)}} type="submit">like</Button>
          </div>
        </div>)}
      </div>
    </div>
    <div className='flex flex-col items-center m-20'>
          <h1 className='text-3xl'>total likes: 👍👍👍{total}</h1>
    </div>

    </> 
  )
}

export default App
