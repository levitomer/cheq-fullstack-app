import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import helmet from 'helmet';
import api from './api';

const server = express();

server.use(helmet()); // Secure HTTP headers
server.use(bodyParser.json()); // Enable JSON encoded bodies
server.use((req, res, next) => {
    // Grant any client to send a request
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Control what methods are allowed to be performed
    res.setHeader('Access-Control-Allow-Methods', 'POST, PATCH, GET, OPTIONS');
    // Control what headers are allowed to be sent
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
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

// TODO: onfigure webpack hot middleware

server.use('/', api);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
