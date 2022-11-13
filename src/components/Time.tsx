import { FC } from 'react'
import s from '../styles/components/time.module.scss'

interface TimeProps {
  minutes: any
  second: any
}

const Time: FC<TimeProps> = ({ minutes, second }) => {
  return (
    <div className={s.time__container}>
      <span className={s.time}>{minutes}</span>
      <span className={s.time}>:</span>
      <span className={s.time}>{second}</span>
    </div>
  )
}

export default Time
