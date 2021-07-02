const http = require('http');
const hostname = '127.0.0.1';
const port = '3002';

const server = http.createServer((req, res)=>{
	res.statusCode = '200'
	res.setHeader('Content-Type', 'text/plain')
	res.end('hello world!\n')

})
console.log('hello')
server.listen(port, hostname, ()=>{

	console.log(`server is running at http://${hostname}:${port}`)
})

