const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

let totalRequests = 0;
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

const validateId = (req, res, next) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        const error = new Error('Invalid ID format');
        error.status = 400;
        return next(error);
    }
    req.userId = id;
    next();
};

const checkResourceExists = (req, res, next) => {
    const user = users.find(u => u.id === req.userId);
    if (!user) {
        const error = new Error('User not found');
        error.status = 404;
        return next(error);
    }
    req.user = user;
    next();
};

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next(); 
});

app.use((req, res, next) => {
    totalRequests++;
    req.requestCount = totalRequests;
    next();
});

app.get('/', (req, res) => {
    res.json({
        message: "Welcome!",
        requestCount: req.requestCount
    });
});

app.get('/about', (req, res) => {
    res.json({
        message: "About us",
        requestCount: req.requestCount
    });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', [validateId, checkResourceExists], (req, res) => {
    res.json(req.user);
});

app.post('/users', (req, res) => {
    const { name } = req.body;
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    
    const newUser = { id: newId, name };
    users.push(newUser);
    
    res.status(201).json(newUser);
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: statusCode
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
