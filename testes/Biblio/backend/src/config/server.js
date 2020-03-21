// Requires
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors') 

// Declarations
const port = 3003
const server = express()

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Pipeline configuration
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)

var logger = async function(req, res, next) {
    console.log(`[${new Date().toISOString()}] requisição: ${req.originalUrl}`)
    //await sleep(5000);
    //console.log(`[${new Date().toISOString()}] requisição: ${req.originalUrl}`)
    next()
}

server.use(logger)

// Run configuration
server.listen(port, () => {
    console.log(`biblio server disponível na porta ${port}`)
})

// Export
module.exports = server