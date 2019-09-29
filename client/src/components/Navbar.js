import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/student-register" className="nav-link">
            Student Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/professor-register" className="nav-link">
            Professor Register
          </Link>
        </li>
      </ul>
    )

    const studentLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/student-dashboard" className="nav-link">
            Student
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    const professorLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/professor-dashboard" className="nav-link">
            Professor
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add-question" className="nav-link">
            New Paper
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? (jwt_decode(localStorage.usertoken).user_type_id === 1 ? studentLink : professorLink) : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)