import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import axios from 'axios';
import {create, getAll, mydelete, update} from './crudmaker.jsx';

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAll().then(resp => {
      setNotes(resp.data)
    })
  }, [])

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: "kekkerson",
      important: Math.random() > 0.5,
      id: (parseInt(notes[notes.length-1]["id"])+1).toString()
    }
    create(noteObject)
  }

  const updateNote = event => {
    //event.preventDefault()
    const indx = event.get("idx");
    const uus = event.get("uus");
    const noteObject = {
      content: uus,
      important: Math.random() > 0.5,
    }
    
    update(indx, noteObject)
  }

  const deleteNote = event => {
    //event.preventDefault()
    const indx = event.get("idx");
    
    mydelete(indx)
  }

  return (
    <main>
      <h1 className='text-7xl'>ne otti kaikki</h1>
      <form onSubmit={addNote}>
        <Button type="submit" variant="contained">POST</Button>
      </form>

    <div className='flex flex-row m-5 justify-around'>
    <form action={updateNote} className='flex flex-col m-5'>
        <TextField label="index" type='number' name='idx'/>
        <TextField label="rename" name='uus'/>
        <Button color="secondary" type="submit" variant="contained">UPDATE</Button>
      </form>
      <form action={deleteNote} className='flex flex-col m-5'>
        <TextField label="index" type='number' name='idx'/>
        <Button color="error" type="submit" variant="contained">DELETE</Button>
      </form>
    </div>

      <div>
      {
      notes !== undefined ? notes.map((w, i) =>
      <div className='flex flex-row m-5 justify-between w-1/2'><h1 key={i}>{w["content"]}</h1><h1>{"tis my id: "+ w["id"]}</h1></div>
        ) : <></>
      }
      </div>
    </main>
  )
}

/*
function thingy(w) {
  return <h1>{w["content"]}</h1>
}
(w)=>{return <h1>{w["content"]}</h1>}
(w)=><h1>{w["content"]}</h1>

function thingy(w) {
  <h1>{w["content"]}</h1>
}
(w)=>{<h1>{w["content"]}</h1>}
*/

export default App
