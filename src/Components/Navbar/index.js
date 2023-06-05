import './index.css'

const Navbar = props => {
  const {score, timer} = props
  return (
    <nav className="nav-bar">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-and-time-container">
        <li className="nav-list-item">
          <p className="score-text">Score: </p>
          <p className="score"> {score}</p>
        </li>

        <li className="nav-list-item">
          <img
            className="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="time">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
