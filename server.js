const http = require('http')
const seaport = require('seaport')

// connect to seaport on port 9090
const ports = seaport.connect('localhost', 9090)

// create a http server
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Port is: ' + this.address().port + '\r\n')
})

// server listens to port registered in seaport
server.listen(ports.register('server'), function () {
    console.log('Server listening on port %d', this.address().port)
})