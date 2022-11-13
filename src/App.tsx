import { useEffect, useState } from 'react'
import Buttons from './components/Buttons'
import Time from './components/Time'
import { getPadTime } from './helpers/getPadTime'
import './styles/app.scss'

const App = () => {
  const InitialTime = 25 * 60

  const [timeLeft, setTimeLeft] = useState(InitialTime)
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
    setTimeLeft(InitialTime)
  }

  return (
    <div className="app">
      <div className="container">
        <Time
          minutes={minutes}
          second={second}
        />
        <Buttons
          isCounting={isCounting}
          handleReset={handleReset}
          handleStart={handleStart}
          handleStop={handleStop}
        />
      </div>
    </div>
  )
}

export default App
