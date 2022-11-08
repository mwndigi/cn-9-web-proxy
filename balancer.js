const http = require('http')
const httpProxy = require('http-proxy')
const seaport = require('seaport')

// connect to seaport on port 9090
const ports = seaport.connect('localhost', 9090)

// create a new proxy
const proxy = httpProxy.createProxyServer({})

// declare variable
var i = -1

// create a http server
var server = http.createServer((req, res) => {
    // get addresses from seaport
    var addresses = ports.query('server')
    console.log(addresses)
    // modulus operator returns division remainder
    i = (i + 1) % addresses.length
    // use i to split host by : into a list and reverse it
    var host = addresses[i].host.split(':').reverse()[0]
    var port = addresses[i].port
    // proxy request to a server
    proxy.web(req, res, { target: 'http://' + host + ':' + port })
})

// server listens to port
server.listen(8000, () => {
    console.log('Load balancer running at port %d', 8000)
})