const http = require('http')

// Exercise 1
// const server = http.createServer(function (request, response) {
//     console.log(`Incoming request: ${request.method}  ${request.url}`)
//     if (request.url === '/' && request.method === 'GET') {
//         response.write('Welcome to my server!')
//         response.end()
//     } else if (request.url === '/about' && request.method === 'GET') {
//         response.write('This is the about page')
//         response.end()
//     } else if (request.url === '/contact' && request.method === 'GET') {
//         response.write('Contact information: email@example.com, Phone: +972-50-0000000')
//         response.end()
//     } else {
//         response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
//         response.write('404 - Page not found')
//         response.end()
//     }
// })

// const port = 3000
// server.listen(port, function () {
//     console.log(`Node server created at port ${port}`)
// })

// Exercise 2
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const server = http.createServer(function (request, response) {
    const { method, url } = request;
    console.log(`Incoming request: ${method} ${url}`)

    const sendJSON = (statusCode, data) => {
        response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
        response.end(JSON.stringify(data));
    };

    if (method === 'GET' && url === '/api/users') {
        return sendJSON(200, users);
    }

    if (method === 'GET' && url.startsWith('/api/users/')) {
        const idParts = url.split('/');
        const id = parseInt(idParts[idParts.length - 1], 10);
        const user = users.find(u => u.id === id);
        if (!user) {
            return sendJSON(404, { error: `User with ID ${id} not found` });
        }
        return sendJSON(200, user);
    }

    if (method === 'POST' && url === '/api/users') {
        let body = '';

        request.on('data', chunk => {
            body += chunk.toString();
        });

        request.on('end', () => {
            try {
                const newUser = JSON.parse(body);

                if (!newUser.name || !newUser.email) {
                    return sendJSON(400, { error: "Name and email are required" });
                }

                const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

                const createdUser = {
                    id: nextId,
                    name: newUser.name,
                    email: newUser.email
                };

                users.push(createdUser);
                return sendJSON(201, createdUser);

            } catch (error) {
                return sendJSON(400, { error: "Invalid JSON format" });
            }
        });
        return; 
    }
    return sendJSON(404, { error: "Route not found" });

})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
