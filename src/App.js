import React from 'react'
import { useState } from 'react'

import styled from 'styled-components'

import { Timer } from './components/Timer'

export function App() {
  const [startNewTimer, setStartNewTimer] = useState([1, 1])
  return (
    <AppWrapper>
      <ol type="1">
        {startNewTimer.map((el, index) => {
          return (
            <li key={index}>
              <Timer seconds={5} />
            </li>
          )
        })}
      </ol>
      <Button onClick={() => setStartNewTimer([...startNewTimer, 1])}>
        add timer
      </Button>
    </AppWrapper>
  )
}

const Button = styled.button`
  width: 100px;
  height: 33px;
  background-color: black;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  text-align: center;
  margin-top: 200px;
`

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  ol {
    min-width: 400px;
  }
`
