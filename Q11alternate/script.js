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

app.post('/signin', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    res.send('Welcome!');
                } else {
                    res.send('Invalid credentials');
                }
            });
        } else {
            res.send('Invalid credentials');
        }
    });
});

app.post('/signup', [
    body('new_username').notEmpty().withMessage('Username is required'),
    body('new_password').notEmpty().withMessage('Password is required')
], (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { new_username, new_password } = req.body;
    bcrypt.hash(new_password, 10, (err, hash) => {
        if (err) throw err;
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(sql, [new_username, hash], (err, result) => {
            if (err) throw err;
            res.redirect('/');
        });
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
