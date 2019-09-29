import axios from 'axios'

export const getProfDetails = (user) => {
    return axios.get(`http://localhost:5000/users/professor-details/${user.user_id}`)
}

export const addNewPaper = (professor) => {
    return axios.post('http://localhost:5000/exams/new-paper', {
      subject_id: professor.subject_id,
      prof_id: professor.prof_id
    })
    .then(response => {
      console.log('New Paper: ' + response.data.paper.paper_id);
      return response.data.paper.paper_id;
    })
}

export const addQuestion = async (newQuestion, paperId) => {
  console.log(paperId)
  return await axios
    .post('http://localhost:5000/exams/add-question', {
      question: newQuestion.question,
      A: newQuestion.A,
      B: newQuestion.B,
      C: newQuestion.C,
      D: newQuestion.D,
      right_answer: newQuestion.right_answer,
      paper_id: paperId
    })
    .then(response => {
      console.log(response.data.status);
    })
}

export const getPaperList = (prof) => {
  return axios.get(`http://localhost:5000/exams/list-paper/${prof.prof_id}/${prof.subject_id}`)
}

export const getQuestionList = (paper_id) => {
  return axios.get(`http://localhost:5000/exams/list-question/${paper_id}`)
}
