const express = require('express')
const path = require('path')

const app = express()
 
 app.use(express.static('./public'))
 app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
 })

 app.listen(50000,()=>{
    console.log(path.resolve(__dirname,'./public/index.html'));
    console.log('app listening at 50000')
 });