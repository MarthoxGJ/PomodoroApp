import { useTranslation } from 'react-i18next'
import transform from '../../utils/headerUtils'

const PREFIX = 'navbar.'

export default ({ pomodoroStage }) => {
  const { t } = useTranslation()
  return (
    <header>
      <h1 className="title">pomodoro</h1>
      <div className="navbar__container">
        <div className="slide" style={transform(pomodoroStage)}></div>
        <div className="navbar__item">{t(PREFIX + 'pomodoro')}</div>
        <div className="navbar__item">{t(PREFIX + 'short_break')}</div>
        <div className="navbar__item">{t(PREFIX + 'long_break')}</div>
      </div>
    </header>
  )
}
