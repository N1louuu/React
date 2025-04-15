import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {create, getAll, mydelete, update} from './crudmaker.jsx'; 
import { Outlet, Link } from "react-router-dom";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const keikka_info = (props) => {

  return (
    <>
    <div className="m-2 p-2 border-solid border-1 rounded-md w-xl flex flex-col items-center">
      <h1 className='text-3xl'>{props.keikka["event_name"]} - {props.keikka["artist_name"]}</h1>
      <div className="flex flex-col items-center">
      <p>{props.keikka["genre"]}</p>
      <h1>date: {props.keikka["event_date"]} - {props.keikka["starting_time"]}</h1>
      <h1 className="mb-2">place: {props.keikka["adress"]} - {props.keikka["city"]}</h1>
      </div>
    </div>
    </>
  )
}

const Keikka_view = () => {

  const [keikat, setNotes] = useState([])

  useEffect(() => {
    getAll().then(resp => {
      setNotes(resp.data)
    })
  }, [])

  let citys = []
  keikat.forEach(keikka => {
    if (!citys.includes(keikka["city"]) && !keikka["city"]=="") {
      citys.push(keikka["city"])
    }
  });
  const [city, setCity] = useState("all")

  let genres = []
  keikat.forEach(keikka => {
    if (!genres.includes(keikka["genre"]) && !keikka["genre"]=="") {
      genres.push(keikka["genre"])
    }
  });
  const [genre, setGenre] = useState("all")

  let dates = []
  keikat.forEach(keikka => {
    if (!dates.includes(keikka["event_date"]) && !keikka["event_date"]=="") {
      dates.push(keikka["event_date"])
    }
  });
  const [date, setDate] = useState("all")

  return (
    <main>
      <div className='flex flex-row m-5 justify-around'>
        <div className='m-2 flex flex-col'> 
        <h1 className='text-5xl text-center m-2'>Keikat</h1>
        <form className='flex flex-row gap-2'>
        <FormControl>
        <InputLabel>City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={city}
            label="City"
            onChange={(e) => {setCity(e.target.value)}}
          >
          <MenuItem value="all"> - Valitse - </MenuItem>
          {citys.map(citi => 
            <MenuItem value={citi}>{citi}</MenuItem>
            )}
        </Select>
        </FormControl>

        <FormControl>
        <InputLabel>Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={genre}
            label="Genre"
            onChange={(e) => {setGenre(e.target.value)}}
          >
          <MenuItem value="all"> - Valitse - </MenuItem>
          {genres.map(gen => 
            <MenuItem value={gen}>{gen}</MenuItem>
            )}
        </Select>
        </FormControl>

        <FormControl>
        <InputLabel>Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={date}
            label="Date"
            onChange={(e) => {setDate(e.target.value)}}
          >
          <MenuItem value="all"> - Valitse - </MenuItem>
          {dates.map(dat => 
            <MenuItem value={dat}>{dat}</MenuItem>
            )}
        </Select>
        </FormControl>
        </form>

          {keikat.map(keikka => 
            {if ((city == "all" || city == keikka["city"]) && (genre == "all" || genre == keikka["genre"]) && (date == "all" || date == keikka["event_date"])) {
              return keikka_info(keikka = {keikka})
            }
          })}
        </div>
      </div>
    </main>
  )
}

export default Keikka_view
