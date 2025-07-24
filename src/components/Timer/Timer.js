import { useState, useRef } from 'react';

function Timer(){
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const hourInput = useRef('');
const minuteInput = useRef('');
const secondInput = useRef('');

const targetTime = 0;

const getTime = (e) => {
   let target = document.querySelectorAll(e.currentTarget.className);

   if (target = 'hours')
        {setHours(e.target.value)} 
        else if (target = 'minutes') 
            {setMinutes(e.target.value)}
            else{
                setSeconds(e.target.value)}
    console.log(target);
}

    return (
        <div className='timer'>
        <h2>Time</h2><br />
        <input className='hours' type='textBox' ref={hourInput} onChange={getTime}/>
        <input className='minutes' type='textBox' ref={minuteInput} onChange={getTime}/>
        <input className='seconds' type='textBox' ref={secondInput} onChange={getTime}/><br />
        <a>Hours:{hours}</a><br />
        <a>Minutes:{minutes}</a><br />
        <a>Seconds:{seconds}</a>

        </div>
    )
};

export default Timer;