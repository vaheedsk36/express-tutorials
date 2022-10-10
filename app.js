const express = require('express')
const app = express()

// This is a middleware function
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear
    console.log(method, url, time)
    next()
}

app.use('/api',logger);

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',logger,(req,res)=>{
    res.send('About Page')
})

app.get('/api/products',logger,(req,res)=>{
    res.send('Products Page')
})

app.listen(50000,()=>{
    console.log('Server listening at port 50000')
})