const express = require('express');
const { body, param, validationResult } = require('express-validator');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const app = express();
const PORT = 3000;

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

app.use(express.json());

let posts = [];
let comments = [];
let postIdCounter = 1;
let commentIdCounter = 1;

app.use((req, res, next) => {
    if (['POST', 'PUT', 'PATCH'].includes(req.method) && !req.is('json')) {
        return res.status(415).json({
            status: 'error',
            message: 'Unsupported Media Type. Content-Type must be application/json'
        });
    }
    next();
});

const rateLimits = {};
app.use((req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    
    if (!rateLimits[ip]) {
        rateLimits[ip] = [];
    }
    
    rateLimits[ip] = rateLimits[ip].filter(timestamp => now - timestamp < 60000);
    
    if (rateLimits[ip].length >= 10) {
        return res.status(429).json({
            status: 'error',
            message: 'Too many requests. Please try again after a minute.'
        });
    }
    
    rateLimits[ip].push(now);
    next();
});

app.use((req, res, next) => {
    const start = process.hrtime();
    
    res.on('finish', () => {
        const diff = process.hrtime(start);
        const timeInMs = (diff[0] * 1000 + diff[1] / 1000000).toFixed(2);
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} (${timeInMs}ms)`);
    });
    
    next();
});

app.use((req, res, next) => {
    res.sendSuccess = (data, statusCode = 200) => {
        res.status(statusCode).json({
            status: 'success',
            data: data
        });
    };
    next();
});


const postSchema = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 5, maxLength: 100 },
        content: { type: "string", minLength: 10, maxLength: 1000 },
        tags: { 
            type: "array", 
            items: { type: "string" } 
        }
    },
    required: ["title", "content", "tags"],
    additionalProperties: true
};

const validatePostAJV = (req, res, next) => {
    const validate = ajv.compile(postSchema);
    const valid = validate(req.body);
    
    if (!valid) {
        return res.status(400).json({
            status: 'error',
            message: 'Validation failed',
            errors: validate.errors.map(err => `${err.instancePath.replace('/', '')} ${err.message}`)
        });
    }
    next();
};

const validateCommentExpress = [
    param('postId').custom((value) => {
        const postExists = posts.some(p => p.id === Number(value));
        if (!postExists) {
            throw new Error('Referenced post does not exist');
        }
        return true;
    }),
    body('content').isString().isLength({ min: 5, max: 500 }).withMessage('Content must be 5-500 characters'),
    body('email').isEmail().withMessage('Must be a valid email address'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors.array().map(e => `${e.path}: ${e.msg}`)
            });
        }
        next();
    }
];

const validatePostIdOnly = [
    param('postId').custom((value) => {
        if (isNaN(Number(value))) {
            throw new Error('Post ID must be a valid number');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 'error', errors: errors.array() });
        }
        next();
    }
];

app.post('/posts', validatePostAJV, (req, res) => {
    const { title, content, tags, ...rest } = req.body;
    
    const newPost = {
        id: postIdCounter++,
        title,
        content,
        tags,
        ...rest
    };
    
    posts.push(newPost);
    res.sendSuccess(newPost, 201);
});

app.get('/posts', (req, res) => {
    res.sendSuccess(posts);
});

app.post('/posts/:postId/comments', validateCommentExpress, (req, res) => {
    const targetPostId = Number(req.params.postId);
    const { content, email } = req.body;
    
    const newComment = {
        id: commentIdCounter++,
        postId: targetPostId,
        content,
        email
    };
    
    comments.push(newComment);
    res.sendSuccess(newComment, 201);
});

app.get('/posts/:postId/comments', validatePostIdOnly, (req, res) => {
    const targetPostId = Number(req.params.postId);
    
    const postExists = posts.some(p => p.id === targetPostId);
    if (!postExists) {
        return res.status(404).json({ status: 'error', message: 'Post not found' });
    }
    
    const postComments = comments.filter(c => c.postId === targetPostId);
    res.sendSuccess(postComments);
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});

app.listen(PORT, () => {
    console.log(`Blog API running on http://localhost:${PORT}`);
});
