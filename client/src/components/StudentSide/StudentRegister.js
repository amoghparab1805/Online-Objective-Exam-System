import React, { Component } from 'react'
import { studentRegister } from '../UserFunctions'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

class StudentRegister extends Component {
  constructor() {
    super()
    this.state = {
      SAP_id: '',
      email_id: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      password: '',
      user_type_id: 1,
      division: 'A',
      phone_number: '',
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

    const newUser = {
      SAP_id: this.state.SAP_id,
      email_id: this.state.email_id,
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      password: this.state.password,
      user_type_id: this.state.user_type_id,
      division: this.state.division,
      phone_number: this.state.phone_number,
    }

    studentRegister(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Student Register</h1>
              <div className="form-group">
                <label htmlFor="email">SAP Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="SAP_id"
                  placeholder="Enter SAP Id"
                  value={this.state.SAP_id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email_id"
                  placeholder="Enter email"
                  value={this.state.email_id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Middle name</label>
                <input
                  type="text"
                  className="form-control"
                  name="middle_name"
                  placeholder="Enter your middle name"
                  value={this.state.middle_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={ this.state.phone_number }
                  onChange={ phone_number => this.setState({ phone_number }) }
                />
              </div>
              <div className="form-group">
                <label htmlFor="division">Division</label>
                <select className="form-control" name="division" value={this.state.division} onChange={this.onChange}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
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
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentRegister