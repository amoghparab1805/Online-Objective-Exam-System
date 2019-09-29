// import React from 'react';
import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import StudentRegister from './components/StudentSide/StudentRegister'
import ProfessorRegister from './components/ProfessorSide/ProfessorRegister'
import StudentDashboard from './components/StudentSide/StudentDashboard'
import ProfessorDashboard from './components/ProfessorSide/ProfessorDashboard'
import AddQuestion from './components/ProfessorSide/AddQuestion'
import ListPaper from './components/ProfessorSide/ListPaper'
import ListQuestion from './components/ProfessorSide/ListQuestion'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/student-register" component={StudentRegister} />
            <Route exact path="/professor-register" component={ProfessorRegister} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/student-dashboard" component={StudentDashboard} />
            <Route exact path="/professor-dashboard" component={ProfessorDashboard} />
            <Route exact path="/add-question" component={AddQuestion} />
            <Route exact path="/list-paper/:prof_id/:subject_id" component={ListPaper} />
            <Route exact path="/list-question/:paper_id" component={ListQuestion} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
