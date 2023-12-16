const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.urlencoded({ extended: true }));

//creating sql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*******',
    database: '*******'
});

//checking connection if sucessful
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

//defining port to listen the request
app.listen(5000,()=>{
    console.log("listening on port 5000");
});

//root url
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});

// login page redirection
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});

// signup page redirection
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

// login request
app.post('/login', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
], (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            if (password === result[0].password) {
                res.send(`Welcome! ${username} ! Happy to See You :) `);
            } else {
                res.send('Invalid credentials.');
            }
        } else {
            res.send('User not found.');
        }
    });
});

//sign up request
app.post('/signup', [
    body('new_username').notEmpty().withMessage('Username is required'),
    body('new_password').notEmpty().withMessage('Password is required')
], (req, res) => {
    const { new_username, new_password } = req.body;
    
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(sql, [new_username, new_password], (err, result) => {
            if (err){
                console.log("error in executing sql query");
            }else{

                res.redirect('/');
            }
        });
    
});

