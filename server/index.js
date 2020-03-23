import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import helmet from 'helmet';
import cors from 'cors';
import mysql from 'mysql';
import api from './api';

const server = express();

server.use(helmet()); // Secure HTTP headers
server.use(express.json()); // Enable JSON encoded bodies
server.use(express.urlencoded({ extended: true }));
server.use(cors());
// server.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );
export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tomer12345!',
    database: 'vasts'
});

connection.connect(err => {
    if (err) console.log(err);
    console.log('Connection to MySQL server established');
});

// Limiting browser session to 30 mins
server.use(
    session({
        secret: 'shh!',
        unset: 'destroy',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 30
        },
        rolling: true
    })
);

server.use('/', api);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
