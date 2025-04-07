
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

const App = () => {
  const opsikelijst = [
    { name: 'Pekka', age: 40, email:"pakka.peukalo@gmail.com"},
    { name: 'Palo', age: 37, email:"palo.peltoniemi@gmail.com"},
  ]

  return (
    <>
    <div class="flex h-screen flex-col">

      <Opiskelijat opsit={opsikelijst} />
      <div class="flex-1 flex-row content-end">
        <p>älä paina henkilö kuvaa...</p>
      </div>

    </div>
    </>
  )
}

export default App
