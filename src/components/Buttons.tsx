import { FC } from 'react'
import s from '../styles/components/buttons.module.scss'

interface ButtonsProps {
  isCounting: boolean
  handleStop: () => void
  handleStart: () => void
  handleReset: () => void
  increment: () => void
  decrement: () => void
}

const Buttons: FC<ButtonsProps> = ({
  isCounting,
  handleStop,
  handleStart,
  handleReset,
  increment,
  decrement
}) => {
  return (
    <div className={s.btns__container}>
      <div className={s.btns__inner}>
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
      <div className={s.settings__btns__container}>
        <button
          onClick={increment}
          className={s.btns}
        >
          +5
        </button>
        <button
          onClick={decrement}
          className={s.btns}
        >
          -5
        </button>
      </div>
    </div>
  )
}

export default Buttons
