import React from 'react'
import { useState, useEffect } from 'react'

import {Timer} from './components/Timer';

export function App() {
  const [startNewTimer, setStartNewTimer] = useState([1, 1])  
  return (
    <>    
    {
      startNewTimer.map( (el, index) => {
        return <li key={index}><Timer seconds={5}/></li>
      })
    }
    <button onClick={() => setStartNewTimer([...startNewTimer, 1])}>add timer</button>  
    </>
  );
}

