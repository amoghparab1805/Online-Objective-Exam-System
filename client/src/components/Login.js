import React, { Component } from 'react'
import { login } from './UserFunctions'
import jwt_decode from 'jwt-decode'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      SAP_id: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      SAP_id: this.state.SAP_id,
      password: this.state.password
    }

    login(user).then(res => {
      if (res && jwt_decode(res).user_type_id === 1) {
        this.props.history.push(`/student-dashboard`)
      }
      if (res && jwt_decode(res).user_type_id === 2) {
        this.props.history.push(`/professor-dashboard`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">SAP Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="SAP_id"
                  placeholder="Enter SAP id"
                  value={this.state.SAP_id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login