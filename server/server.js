// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var dbConn = require('./dbConfig');
  
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
  
  
// // default route
// app.get('/', function (req, res) {
//     return res.send({ error: true, message: 'hello' })
// });

// // connect to database
// dbConn.connect(); 

// app.get('/users', function (req, res) {
//     dbConn.query('SELECT * FROM user', function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'users list.' });
//     });
// });

// app.post('/login', function (req, res) {
//     dbConn.query('SELECT SAP_id, password, user_type_id FROM user WHERE SAP_id = ?', req.body.SAP_id, function (error, results, fields) {
//         if (error) throw error;
//         if (results[0].password == req.body.password) {
//             // if (results[0].user_type_id == 1) {
//             //     res.redirect('/student-dashboard');
//             // } else {
//             //     res.redirect('teacher-dashboard');
//             // }
//             res.redirect('/users'); 
//         }
//         else {
//             return res.send({ error: true, data: results, message: 'Invalid SapId or Password' });
//         }
//     });
// });

// // app.get('/marks/:studentId', function (req, res) {
// //     dbConn.query(`SELECT a.selected_answer, b.right_answer FROM student_answers AS a INNER JOIN questions AS b ON a.question_id = b.question_id WHERE a.student_id = ?`, [req.params.studentId], function (error, results, fields) {
// //         if (error) throw error;
// //         var total = 0;
// //         for (let index = 0; index < results.length; index++) {
// //             if (results[index].selected_answer == results[index].right_answer) {
// //                 total = total+1;
// //             }
// //         }
// //         return res.send({ error: false, data: total, message: 'users list.' });
// //     });
// // })

// // app.post('/student', function (req, res) {
// //     let user = req.body;
// //     if (!user) {
// //         return res.status(400).send({ error:true, message: 'Please provide user' });
// //     }
  
// //     dbConn.query("INSERT INTO user SET ? ", user, function (error, result, fields) {
// //         let student = {
// //             year : 'TE',
// //             division : 'A',
// //             user_id : result.insertId
// //         }
// //         dbConn.query("INSERT INTO student SET ? ", student, function (error, results, fields) {
// //             if (error) throw error;
// //             return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
// //         });
// //     });
// // });
 
 
// // // Retrieve all users 
// // app.get('/users', function (req, res) {
// //     dbConn.query('SELECT * FROM users', function (error, results, fields) {
// //         if (error) throw error;
// //         return res.send({ error: false, data: results, message: 'users list.' });
// //     });
// // });
 
 
// // // Retrieve user with id 
// // app.get('/user/:id', function (req, res) {
  
// //     let user_id = req.params.id;
  
// //     if (!user_id) {
// //         return res.status(400).send({ error: true, message: 'Please provide user_id' });
// //     }
  
// //     dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
// //         if (error) throw error;
// //         return res.send({ error: false, data: results[0], message: 'users list.' });
// //     });
  
// // });
 
 
// // // Add a new user  
// // app.post('/user', function (req, res) {
  
// //     let user = req.body.user;
  
// //     if (!user) {
// //         return res.status(400).send({ error:true, message: 'Please provide user' });
// //     }
  
// //     dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
// //         if (error) throw error;
// //         return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
// //     });
// // });
 
 
// // //  Update user with id
// // app.put('/user', function (req, res) {
  
// //     let user_id = req.body.user_id;
// //     let user = req.body.user;
  
// //     if (!user_id || !user) {
// //         return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
// //     }
  
// //     dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
// //         if (error) throw error;
// //         return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
// //     });
// // });
 
 
// // //  Delete user
// // app.delete('/user', function (req, res) {
  
// //     let user_id = req.body.user_id;
  
// //     if (!user_id) {
// //         return res.status(400).send({ error: true, message: 'Please provide user_id' });
// //     }
// //     dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
// //         if (error) throw error;
// //         return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
// //     });
// // }); 
 
// // set port
// app.listen(8000, function () {
//     console.log('Node app is running on port 8000');
// });

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Subjects = require('./routes/Subjects')
var Exams = require('./routes/Exams')

app.use('/users', Users)
app.use('/subjects', Subjects)
app.use('/exams', Exams)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})