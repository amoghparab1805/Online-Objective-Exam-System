import React, { Component } from 'react'
import { getProfDetails, getPaperList } from './ProfessorFunctions'
import jwt_decode from 'jwt-decode'

class ListPaper extends Component {
  constructor() {
    super()
    this.state = {
      profDetails: {},
      paperList: [],
    }
  }

  async componentDidMount() {
    const user = jwt_decode(localStorage.usertoken);
    await getProfDetails(user).then(result => this.setState({ profDetails: result.data }));
    await getPaperList(this.state.profDetails).then(result => this.setState({ paperList: this.state.paperList.concat(result.data) }));
  }

  render() {
    return (
      this.state.paperList.map((paper, i) => (
      <div>
        <a href={"/list-question/" + paper.paper_id}>Paper Number: {i+1} </a>
      </div>
      ))
    )
  }
}

export default ListPaper