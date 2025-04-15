import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import axios from 'axios';
import {create, getAll, mydelete, update} from './crudmaker.jsx';
import Keikka_view from "./keikat.jsx";
import Create_keikka from "./keikka_create.jsx";
import Layout from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="keikka_view" element={<Keikka_view />} />
          <Route path="create_keikka" element={<Create_keikka />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }

createRoot(document.getElementById('root')).render(
    <App />,
)
