import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Hello = (props) => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0]['name']}</p>
      <p>{friends[1]["age"]}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <>
    <div class="flex flex-col h-screen justify-center items-center">
      <h1 class="text-6xl">Hello</h1>
      <h2 class="text-3xl">app not appi</h2>
      <Hello />
    </div>
    </>
  )
}

export default App
