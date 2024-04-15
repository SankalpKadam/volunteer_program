
import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import con from './database.js';
import cors from 'cors';
import routes from './routes/routes.js'
dotenv.config();
con();
// const express = require('express');
// var mysql = require('mysql');


const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes);




// Create messages table
// db.serialize(() => {
//   db.run("CREATE TABLE messages (id INTEGER PRIMARY KEY, userId INTEGER, content TEXT, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)");

//   // Insert some sample data
//   const stmt = db.prepare("INSERT INTO messages (userId, content) VALUES (?, ?)");
//   stmt.run(1, "Hello, how are you?");
//   stmt.run(2, "Hi there!");
//   stmt.run(1, "I'm good, thanks!");
//   stmt.finalize();
// });

// API endpoint to fetch messages
// app.get('/api/messages', (req, res) => {
//     const query = "SELECT * FROM chat ORDER BY timestamp";
//     con.query(query, (err, rows) => {
//       if (err) {
//         console.error('Error fetching messages from MySQL database:', err);
//         res.status(500).json({ error: 'Error fetching messages' });
//         return;
//       }
//       res.json(rows);
//     });
//   });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
