
import React, { createElement, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  let normalCounter = 0;

  const [show, setShow] = useState(false);

  return (
    <>
    <div className="flex flex-col h-screen items-center button-wrapper">
      <p>counter: {counter}</p>
      <button
        type="button"
        className="button m-3 btn-23 btn Btn frutiger-button"
        onClick={() => {
          setCounter(counter + 1)
          console.log(normalCounter)
        }}
      >
            <div class="glitch-layers">
      <div class="glitch-layer layer-1">CLICK ME</div>
      <div class="glitch-layer layer-2">CLICK ME</div>
    </div>
          <span class="text">Button</span>
  <span aria-hidden="" class="marquee">Button</span>
      </button>
      {/* this guy isint putting in the work */}
      <p id="my_p">normalCounter: 0</p>

      <div className='container w-1/2'>
      
      <button
        type="button"
        className="button m-3 btn-23 btn mb-5 Btn"
        alt="tony stark"
        onClick={() => {
          // goodis right here
          normalCounter++;

          document.getElementById("my_p").innerText = "normalCounter: " + normalCounter

          // then console log is here
          /*let my_p = document.createElement("p")
          my_p.innerText = normalCounter

          document.getElementById("my_div").appendChild(my_p)*/

        }} 
      >
                  <span class="text">NORMAL COUNTER: Paina tästä</span>
  <span aria-hidden="" class="marquee">NORMAL COUNTER: Paina tästä</span>
  <div className='flex flex-row'>
  <i>b</i>
  <i>u</i>
  <i>t</i>
  <i>t</i>
  <i>o</i>
  <i>n</i>
  </div>
        
      </button>
      </div>

      <button 
        className="button btn-23 btn golden-button Btn"
        onClick={()=>setShow(!show)}>
        {show ? "Piilota" : "Näytä"} demo </button>

        {show && <div>Nyt se näkyy</div>}

        <span 
  data-active-content="🤨"
  data-hover-content="😑"
  data-content="😐"
  class="💀"
></span>


    </div>
    </>
  );
};

export default App
