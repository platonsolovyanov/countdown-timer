import React from 'react'
import { useState, useEffect } from 'react'

export const Timer = (props) => {
    const {seconds} = props
  const [time, setTime] = useState({ seconds: 0, milliseconds: 1000 })
  const [FinalTime, setFinalTime] = useState('')
  const [countDownDate, setCountDownDate] = useState(
    Date.now() + seconds * 1000
  )

  function finishHandler (finish) {
    setFinalTime(
        `${finish.getHours()}h : ${finish.getMinutes()}m : ${finish.getSeconds()}s : ${finish.getMilliseconds()}ml`
    )
  }

  useEffect(() => {
    const timerId = setInterval(function () {        
      let now = new Date().getTime()      
      let distance = countDownDate - now      
      if (distance >= 0) {
        setTime({
          ...time,
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          milliseconds: Math.floor((distance % 1000) / 1),
        })
      }
    }, 1)
    if (time.seconds == 0 && time.milliseconds < 50) {
      const dateNow = new Date()
      finishHandler(dateNow)    
    }
    return () => clearInterval(timerId)
  }, [time])

  return (
    <div>
        <p>
            {time.seconds} : {time.milliseconds}
        </p>
        <p>
          {FinalTime}
        </p>
    </div>
  )
}
