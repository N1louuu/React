import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import axios from 'axios';
import {create, getAll, mydelete, update} from './crudmaker.jsx';
import keikka_view from "./keikat.jsx";
import create_keikka from "./keikka_create.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/keikka_view">keikka_view</Link>
          </li>
          <li>
            <Link to="/create_keikka">create_keikka</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};


export default Layout
