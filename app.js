const express = require('express')
const primeNumbers = require('./services/PrimeNumbers')
const app = express()
const port = 3000

app.get('/primes/:num', (req, res)=>{
    let num = req.params.num
    res.json(primeNumbers.getPrimesUpTo(num))
})

app.use((err, req, res, next)=>{
    if (res.headersSent) {
        return next(err)
    }
    res.status(err.status)
    res.json({error: err.message})
})

const server = app.listen(port, ()=>{
    let address = server.address()
    console.log(address);
    console.log(`listening on ${address} port ${address.port}`)
})

module.exports = app;