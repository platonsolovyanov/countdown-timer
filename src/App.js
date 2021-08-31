import React from 'react'
import { useState } from 'react'

import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import { Timer } from './components/Timer'

export function App() {
  const { register, handleSubmit } = useForm()

  const [startNewTimer, setStartNewTimer] = useState([1])

  const onSubmit = (data) => {
    setStartNewTimer([...startNewTimer, data.timeForTimer])
  }
  return (
    <AppWrapper>
      <ol type="1">
        {startNewTimer.map((el, index) => {
          return (
            <li key={index}>
              <Timer seconds={el} />
            </li>
          )
        })}
      </ol>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <TimeInput type="number" max={60} {...register('timeForTimer')} />
        <Button type="submit">add timer</Button>
      </form>
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

const TimeInput = styled.input`
  height: 28px;
  width: 50px;
  border-radius: 5px;
  border: none;
  border: 1px solid;
  margin-right: 10px;
`
