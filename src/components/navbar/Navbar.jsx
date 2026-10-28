import { Link } from 'react-router'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar md:navbar-expand bg-1">
      <div className="container-fluid">
        <Link to="/" className="nav-link">Brand</Link>
        <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">

          <div className="drawer-body mb-2 md:mb-0">
            <ul className="nav navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">Settings</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </dialog>
      </div>
    </nav>
  )
}