import './Randomizer.css';
import { useState } from 'react';
import { describeArray, drawArray, playArray }  from './Arrays.js';

function Randomizer() {
   let randomizeArray = [
      "Randomize Me Again...",
      "Try Randomizing Me...",
      "Randomized Text Goes Here",
      "Randomize Me..."
   ]

   const [result, setResult] = useState(randomizeArray[3]);
   const [selection,setSelection] = useState("Describe:");


   function resetResult(e) {
     setResult(randomizeArray[Math.floor(Math.random() * randomizeArray.length)]);
      setSelection(e.currentTarget.value);
   }

   function randomButtonClick() {
      if (selection === "Describe:"){
         setResult(describeArray[Math.floor(Math.random() * describeArray.length)]);
      }else if (selection === "Draw:"){
         setResult(drawArray[Math.floor(Math.random() * describeArray.length)]);
      }else {
         setResult(playArray[Math.floor(Math.random() * describeArray.length)]);
      }
   }

   return (
      <div className='randomizer'>
      <div className="ribbon">
        <select className="dropdown" onChange={resetResult} >
            <option id="describe">Describe:</option>
            <option id="draw">Draw:</option>
            <option id="play">Play:</option>
         </select>
         <span className='answer'>{result}</span>
   </div>
   <button className='randomize' onClick={randomButtonClick}>Randomize</button>
   </div>
   )
}

export default Randomizer;