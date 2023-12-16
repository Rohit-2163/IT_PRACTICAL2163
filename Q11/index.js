const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin@123',
    database: 'rohit_63'
});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});
app.listen(5000,()=>{
    console.log("listening on port 5000");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

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

