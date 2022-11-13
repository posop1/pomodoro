import { FC } from 'react'
import s from '../styles/components/buttons.module.scss'

interface ButtonsProps {
  isCounting: boolean
  handleStop: () => void
  handleStart: () => void
  handleReset: () => void
}

const Buttons: FC<ButtonsProps> = ({ isCounting, handleStop, handleStart, handleReset }) => {
  return (
    <div className={s.btns__container}>
      {isCounting ? (
        <button
          onClick={handleStop}
          className={s.btns}
        >
          Stop
        </button>
      ) : (
        <button
          onClick={handleStart}
          className={s.btns}
        >
          Start
        </button>
      )}
      <button
        onClick={handleReset}
        className={s.btns}
      >
        Reset
      </button>
    </div>
  )
}

export default Buttons
