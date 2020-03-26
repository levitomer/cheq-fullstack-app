import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import cors from 'cors';
import api from './api';

const ORIGIN = 'http://localhost:3001'; // client address
const server = express();

server.use(helmet()); // Secure HTTP headers
server.use(cors({ origin: ORIGIN }));
server.use(express.json()); // Enable JSON encoded bodies
server.use(express.urlencoded({ extended: true }));

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
