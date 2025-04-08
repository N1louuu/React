import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { createElement, useState, useEffect } from 'react';


const Opiskelija = (props) => {

  return (
    <>
    <div class="flex flex-col justify-center bg-cyan-500 p-3 rounded-md pb-90">
      <h1 class="text-2xl">Name: {props.name}</h1>
      <h1 class="text-2xl">Age: {props.age} </h1>
      <h1 class="text-2xl mb-2">email: {props.email} </h1>

      <div class="rotating_div transform-3d">
        <img class="translate-z-0 rotate-x-0 fixed" src="src/ostudent.png" alt="person"/>
        <img class="translate-z-37 rotate-x-90 translate-y-37 fixed" src="src/ostudent.png" alt="person"/>
        <img class="translate-z-37 rotate-x-90 -translate-y-37 fixed" src="src/ostudent.png" alt="person"/>
        <img class="translate-z-37 rotate-y-90 translate-x-37 fixed" src="src/ostudent.png" alt="person"/>
        <img class="translate-z-37 rotate-y-90 -translate-x-37 fixed" src="src/ostudent.png" alt="person"/>
        <img class="translate-z-74 rotate-x-0 fixed" src="src/ostudent.png" alt="person"/>
      </div>

    </div>
    </>
  )
}

const Opiskelijat = (props) => {

  let opsit = props.opsit

  return (
    <>
      <div class="flex flex-row gap-5 m-4">
        {opsit.map(opsi => (
        <Opiskelija name={opsi.name} age={opsi.age} email={opsi.email}/>
        ))}
      </div>
    </>
  )
}


const Rowi = (props) => {

  if (props.bg) {
    return (
      <>
      <div class="flex flex-row">
        <div class="border-1 border-solid w-50 bg-gray-400"><h1 class="font-bold">{props.kurssi}</h1></div>
        <div class="border-1 border-solid w-50 bg-gray-400"><h1 class="font-bold">{props.ope}</h1></div>
        <div class="border-1 border-solid w-50 bg-gray-400"><h1 class="font-bold">{props.luokka}</h1></div>
      </div>
      </>
    )
  } else {
    return (
      <>
      <div class="flex flex-row">
        <div class="border-1 border-solid w-50"><h1>{props.kurssi}</h1></div>
        <div class="border-1 border-solid w-50"><h1>{props.ope}</h1></div>
        <div class="border-1 border-solid w-50"><h1>{props.luokka}</h1></div>
      </div>
      </>
    )
  }
}

let update2 = false;

const Maa = (props) => {

  return (
    <>
    <div class="m-2 p-2 border-solid border-1 rounded-md w-xl flex flex-col items-center">
      <Button className='mt-5 font-bold text-2xl' onClick={()=>{props.countries_show[props.show]=!props.countries_show[props.show]; props.setUpdate(!update2);}}>{props.name}</Button>
      {props.countries_show[props.show] &&<div class="flex flex-col items-center">
      <h1>pääkauounki: {props.capital}</h1>
      <h1 class="mb-2">asukasluku: {props.population}</h1>
      <img class="w-1/2" src={props.flag} alt="lippu" />
      </div>}
    </div>
    </>
  )
}

let countries_show = []
const App = () => {
  const [update, setUpdate] = useState(false);
  update2 = update;

  const opsikelijst = [
    { name: 'Pekka', age: 40, email:"pakka.peukalo@gmail.com"},
    { name: 'Palo', age: 37, email:"palo.peltoniemi@gmail.com"},
  ]

  const rivit = [
    { kurssi: 'bilsa', ope: "sirpa", luokka:"1"},
    { kurssi: 'äikkä', ope: "naakka", luokka:"2"},
  ]

  const countries = [
    {   name:"Finland",
        capital:"Helsinki",
        population:5491817,
        flag:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"
    },
    {   name:"Sweden",
        capital:"Stockholm",
        population:9894888,
        flag:"https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
    },
    {   name:"Norway",
        capital:"Oslo",
        population:5223256,
        flag:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
    },
    {   name:"Denmark",
        capital:"Copenhagen",
        population:5717014,
        flag:"https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"
    },
    {   name:"Iceland",
        capital:"Reykjavík",
        population:334300,
        flag:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg"
    }]

  const [show_t1, setShow1] = useState(false);
  const [show_t2, setShow2] = useState(false);
  const [show_t3, setShow3] = useState(false);
  
  useEffect(()=>{
    console.log("once in a lifetime experience!")
    countries.forEach(country => {
      countries_show.push(false)
    });
  }, []);

  return (
    <>
    <div class="flex h-screen flex-col m-5 items-center">
    <Button className='mt-5' variant="contained" onClick={()=>setShow1(!show_t1)}>{show_t1 ? "Piilota" : "Näytä"} tehtävä 1</Button>

      {show_t1 && <div class='m-5'><h1 class="text-4xl">Tehtävä 1</h1>
      <Opiskelijat opsit={opsikelijst} /></div>}

      <Button className='mt-5' variant="contained" onClick={()=>setShow2(!show_t2)}>{show_t2 ? "Piilota" : "Näytä"} tehtävä 2</Button>

      {show_t2 && <div class='m-5'><h1 class="text-4xl">Tehtävä 2</h1>
      <div class="flex flex-col">
        <Rowi kurssi="Kurssi" ope="Opettaja" luokka="luokka" bg={true} />
        {rivit.map(rivi => (
          <Rowi kurssi={rivi["kurssi"]} ope={rivi["ope"]} luokka={rivi["luokka"]} />
        ))}


      </div></div>}

      <Button className='mt-5' variant="contained" onClick={()=>setShow3(!show_t3)}>{show_t3 ? "Piilota" : "Näytä"} tehtävä 3</Button>

      {show_t3 && <div class='m-5'><h1 class="text-4xl mt-5">Tehtävä 3</h1>
        {countries.map(country => (
        <Maa name={country["name"]} capital={country["capital"]} setUpdate={setUpdate} population={country["population"]} flag={country["flag"]} countries_show={countries_show} show={countries.indexOf(country)}/>
      ))}
      </div>}
    </div>
    
    </>
  )
}

export default App
