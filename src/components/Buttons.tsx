import { FC } from 'react'

interface ButtonsProps {
  isCounting: boolean
  handleStop: () => void
  handleStart: () => void
  handleReset: () => void
}

const Buttons: FC<ButtonsProps> = ({ isCounting, handleStop, handleStart, handleReset }) => {
  return (
    <div>
      {isCounting ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Buttons
