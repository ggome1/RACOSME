const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'review_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());

// 리뷰 조회 API
app.get('/reviews', (req, res) => {
    const query = 'SELECT nickname, score, date, content, image FROM reviews';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
});

// 리뷰 생성 API
app.post('/reviews', (req, res) => {
    const { nickname, score, date, content, image } = req.body;

    if (!nickname || !score || !date || !content) {
        res.status(400).json({ error: 'All fields except image are required!' });
        return;
    }

    const query = 'INSERT INTO reviews (nickname, score, date, content, image) VALUES (?, ?, ?, ?, ?)';
    const values = [nickname, score, date, content, image];

    db.query(query, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Review created successfully!', reviewId: result.insertId });
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`START SERVER`);
});