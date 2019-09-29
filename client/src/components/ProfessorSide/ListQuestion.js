import React, { Component } from 'react'
import { getQuestionList } from './ProfessorFunctions'
import jwt_decode from 'jwt-decode'

class ListQuestion extends Component {
  constructor() {
    super()
    this.state = {
      questionList: [],
    }
  }

  async componentDidMount() {
    const user = jwt_decode(localStorage.usertoken);
    await getQuestionList(this.props.match.params.paper_id).then(result => this.setState({ questionList: this.state.questionList.concat(result.data) }));
  }

  render() {
    return (
      this.state.questionList.map((question, i) => (
        <div>
            <h4 key={i}>{i+1} {question.question}</h4>
            <p>A {question.A}</p>
            <p>B {question.B}</p>
            <p>C {question.C}</p>
            <p>D {question.D}</p>
        </div>))
    )
  }
}

export default ListQuestion