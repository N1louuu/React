
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

const App = () => {
  const rivit = [
    { kurssi: 'bilsa', ope: "sirpa", luokka:"1"},
    { kurssi: 'äikkä', ope: "naakka", luokka:"2"},
  ]

  return (
    <>
    <div class="flex h-screen flex-col">
      <Rowi kurssi="Kurssi" ope="Opettaja" luokka="luokka" bg={true} />
      {rivit.map(rivi => (
        <Rowi kurssi={rivi["kurssi"]} ope={rivi["ope"]} luokka={rivi["luokka"]} />
      ))}
    </div>
    </>
  )
}

export default App
