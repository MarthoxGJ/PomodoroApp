import { useState } from 'react'
import Header from '../../components/Header/Header'

export default () => {
  const [pomodoroStage, setPomodorStage] = useState(0)

  return (
    <section>
      <Header pomodoroStage={pomodoroStage} />
      <p className="pomodoro_clock">clock here</p>
      <p className="settings">settings</p>
    </section>
  )
}
