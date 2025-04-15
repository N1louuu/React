import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import axios from 'axios';
import {create, getAll, mydelete, update} from './crudmaker.jsx';
import keikka_view from "./keikat.jsx";
import { Outlet, Link } from "react-router-dom";

const keikka_create = () => {
  const addNote = event => {
    //event.preventDefault()
    const keikk = {
      artist_name: event.get("artist_name"),
      event_name: event.get("event_name"),
      event_image : "",
      event_date : event.get("event_date"),
      starting_time : event.get("starting_time"),
      adress : event.get("adress"),
      city : event.get("city"),
      link : "",
      genre : event.get("genre"),
      site_link : "",
    }
    create(keikk)
    console.log("!!!")
  }

  return (
  <form className='flex flex-col gap-5' action={addNote}>
    <TextField label="artist name" name='artist_name'/>
    <TextField label="event name" name='event_name'/>
    <TextField label="event date" name='event_date'/>
    <TextField label="starting_time" name='starting_time'/>
    <TextField label="adress" name='adress'/>
    <TextField label="city" name='city'/>
    <TextField label="genre" name='genre'/>
    <Button type="submit" variant="contained">Lisää keikka</Button>
  </form>
  )
}

const Create_keikka = () => {

  const [keikat, setNotes] = useState([])

  useEffect(() => {
    getAll().then(resp => {
      setNotes(resp.data)
    })
  }, [])

  return (
    <main>
      <div className='flex flex-row m-5 justify-around'>
        <div className='m-2 flex flex-col'>
            {keikka_create()}
        </div>
      </div>
    </main>
  )
}

export default Create_keikka
