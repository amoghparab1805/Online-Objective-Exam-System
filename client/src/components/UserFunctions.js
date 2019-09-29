import axios from 'axios'

export const studentRegister = newUser => {
  return axios
    .post('http://localhost:5000/users/student-register', {
      SAP_id: newUser.SAP_id,
      email_id: newUser.email_id,
      first_name: newUser.first_name,
      middle_name: newUser.middle_name,
      last_name: newUser.last_name,
      password: newUser.password,
      user_type_id: newUser.user_type_id,
      division: newUser.division,
      phone_number: newUser.phone_number
    })
    .then(response => {
      console.log('Registered');
      console.log(response);
    })
}

export const professorRegister = newUser => {
  return axios
    .post('http://localhost:5000/users/professor-register', {
      SAP_id: newUser.SAP_id,
      email_id: newUser.email_id,
      first_name: newUser.first_name,
      middle_name: newUser.middle_name,
      last_name: newUser.last_name,
      password: newUser.password,
      user_type_id: newUser.user_type_id,
      subject_id: newUser.subject_id,
      department: newUser.department,
      phone_number: newUser.phone_number
    })
    .then(response => {
      console.log('Registered');
      console.log(response);
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      SAP_id: user.SAP_id,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
