import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class StudentDashboard extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email_id: '',
      SAP_id: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email_id,
      SAP_id: decoded.SAP_id,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Student Dashboard</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>SAP_id</td>
                <td>{this.state.SAP_id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default StudentDashboard