const Maa = (props) => {

  return (
    <>
    <div class="m-2 p-2 border-solid border-1 rounded-md w-xl flex flex-col items-center">
      <h1 class="font-bold text-2xl">{props.name}</h1>
      <h1>pääkauounki: {props.capital}</h1>
      <h1 class="mb-2">asukasluku: {props.population}</h1>
      <img class="w-1/2" src={props.flag} alt="lippu" />
    </div>
    </>
  )
}

const App = () => {
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

  return (
    <>
    <div class="flex h-screen flex-col m-5 items-center">
      <h1 class="text-4xl">Maat</h1>
      {countries.map(country => (
        <Maa name={country["name"]} capital={country["capital"]} population={country["population"]} flag={country["flag"]} />
      ))}
    </div>
    </>
  )
}

export default App
