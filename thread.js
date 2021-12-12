const bcrypt = require('bcrypt');
const http = require('http')

process.env.UV_THREADPOOL_SIZE = 8

http.createServer((req, res) => {
    bcrypt.hash('hashCode', 2).then((hash) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(hash)
        res.end()
    })
}).listen(1337)