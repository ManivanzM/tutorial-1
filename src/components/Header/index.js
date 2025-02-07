import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="title-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-menu">
      <li className="list-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
