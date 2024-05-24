// Create web server
// Create a web server that listens to a port and responds to requests. The server should respond with a status code of 200 and the following JSON object when the path is '/api/comments':
// {
//     "comments": [
//         {
//             "username": "Todd",
//             "comment": "I love JS"
//         },
//         {
//             "username": "Louis",
//             "comment": "I love Python"
//         }
//     ]
// }
// The server should listen on port 3000.

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/api/comments' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            comments: [
                {
                    username: 'Todd',
                    comment: 'I love JS'
                },
                {
                    username: 'Louis',
                    comment: 'I love Python'
                }
            ]
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
