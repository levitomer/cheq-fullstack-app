import express from 'express';
// import * as routes from './routes';
import * as routes from './mocks';

const router = express.Router();

// Registering API routes
Object.keys(routes).forEach(key => routes[key](router));

// Fallback route
router.use('*', (req, res) => {
    res.status(404);
    res.json('Page Not Found');
});

// Error Handler
router.use((err, req, res, next) => {
    res.status(500);
    console.error(err);
    res.json('Unexpected error, please contact the author');
});

export default router;
