import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })      
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }
  
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response)
      })
  }

  return (
    <>
    {notes.map((w, i) =>
      <h1 key={i}>{w["content"]}</h1>
    )}
    </>
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
