export default pomodoroStage => {
  const pomodoro = 0
  const short_break = 100
  const long_break = 200

  switch (pomodoroStage) {
    case 0:
      return { transform: `translateX(${pomodoro}%)` }
      break
    case 1:
      return { transform: `translateX(${short_break}%)` }
      break
    case 2:
      return { transform: `translateX(${long_break}%)` }
      break
    default:
      return { transform: `translateX(${pomodoro}%)` }
      break
  }
}
