const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Request accepted')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1> Resource not found </h1>')
})

app.listen(50000,()=>{
    console.log('app is listening at port 50000')
})

// app.get : get request
// app.post : post request
// app.put : update request
// app.delete : delete request
// app.all : listens to all requests