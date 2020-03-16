import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import api from './api';

const server = express();

server.use(helmet()); // Secure HTTP headers
server.use(bodyParser.json()); // Enable JSON encoded bodies
server.use('/', api);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
