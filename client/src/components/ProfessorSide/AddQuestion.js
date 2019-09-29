import React, { Component } from 'react'
import { addQuestion, getProfDetails, addNewPaper } from './ProfessorFunctions'
import jwt_decode from 'jwt-decode'

class AddQuestion extends Component {
  constructor() {
    super()
    this.state = {
      question: '',
      A: '',
      B: '',
      C: '',
      D: '',
      right_answer: 'A',
      paper_id: 0,
      profDetails: {},
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onChangeSelect = this.onChangeSelect.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onNext = this.onNext.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeSelect(e) {
    this.setState({ right_answer: e.target.value })
  }
  async onSubmit(e) {
    e.preventDefault();

    const question = {
      question: this.state.question,
      A: this.state.A,
      B: this.state.B,
      C: this.state.C,
      D: this.state.D,
      right_answer: this.state.right_answer,
    }

    var questionList = JSON.parse(localStorage.getItem("questionList") || "[]");
    questionList.push(question);
    localStorage.setItem("questionList", JSON.stringify(questionList));

    var list =  JSON.parse(localStorage.getItem("questionList"));
    await addNewPaper(this.state.profDetails.data).then(result => localStorage.setItem("paperId", result) );
    list.map(ques => addQuestion(ques, localStorage.paperId));

    localStorage.removeItem("questionList");
    localStorage.removeItem("paperId");
    this.props.history.push(`/professor-dashboard`);
  }
  onNext(e) {
    e.preventDefault()
    const question = {
      question: this.state.question,
      A: this.state.A,
      B: this.state.B,
      C: this.state.C,
      D: this.state.D,
      right_answer: this.state.right_answer,
    }

    var questionList = JSON.parse(localStorage.getItem("questionList") || "[]");
    questionList.push(question);
    localStorage.setItem("questionList", JSON.stringify(questionList));

    window.location.reload();
  }

  componentDidMount() {
    const user = jwt_decode(localStorage.usertoken);
    getProfDetails(user).then(result => this.setState({ profDetails: result }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Add Question</h1>
              <div className="form-group">
                <label htmlFor="question">Question</label>
                <textarea className="form-control" name="question" placeholder="Enter question" value={this.state.question} onChange={this.onChange} rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="options">A</label>
                <textarea className="form-control" name="A" value={this.state.A} onChange={this.onChange} rows="2"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="options">B</label>
                <textarea className="form-control" name="B" value={this.state.B} onChange={this.onChange} rows="2"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="options">C</label>
                <textarea className="form-control" name="C" value={this.state.C} onChange={this.onChange} rows="2"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="options">D</label>
                <textarea className="form-control" name="D" value={this.state.D} onChange={this.onChange} rows="2"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="right_answer">Right Answer</label>
                <select className="form-control" name="right_answer" value={this.state.right_answer} onChange={this.onChangeSelect}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
              <button
                // type="button"
                className="btn btn-secondary btn-sm"
                onClick={this.onNext}
              >
                Next
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddQuestion