import { useEffect, useState } from 'react'
import { getPadTime } from './helpers/getPadTime'
import './styles/app.scss'

const App = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60)
  const [isCounting, setIsCounting] = useState(false)

  const minutes: any = getPadTime(Math.floor(timeLeft / 60))
  const second = getPadTime(timeLeft - minutes * 60)

  useEffect(() => {
    const Interval = setInterval(() => {
      isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)

    if (timeLeft === 0) setIsCounting(false)

    return () => {
      clearInterval(Interval)
    }
  }, [timeLeft, isCounting])

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(2 * 60)
    setIsCounting(true)
  }
  const handleStop = () => {
    setIsCounting(false)
  }
  const handleReset = () => {
    setIsCounting(false)
    setTimeLeft(2 * 60)
  }

  return (
    <div className="app">
      <div>
        <span>{minutes}</span>
        <span>:</span>
        <span>{second}</span>
      </div>
      <div>
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
