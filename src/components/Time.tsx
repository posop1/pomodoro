import { FC } from 'react'

interface TimeProps {
  minutes: any
  second: any
}

const Time: FC<TimeProps> = ({ minutes, second }) => {
  return (
    <div>
      <span>{minutes}</span>
      <span>:</span>
      <span>{second}</span>
    </div>
  )
}

export default Time
