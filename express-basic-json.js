const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(50000,()=>{
    console.log('server is running at port 50000')
})