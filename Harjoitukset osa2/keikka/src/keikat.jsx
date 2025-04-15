import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {create, getAll, mydelete, update} from './crudmaker.jsx'; 
import { Outlet, Link } from "react-router-dom";

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

  return (
    <main>
      <div className='flex flex-row m-5 justify-around'>
        <div className='m-2 flex flex-col'> 
        <h1 className='text-5xl text-center'>Keikat</h1>         
          {keikat.map(keikka => 
            keikka_info(keikka = {keikka})
          )}
        </div>
      </div>
    </main>
  )
}

export default Keikka_view
