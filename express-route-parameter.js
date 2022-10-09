const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((data)=>{
        const {id,name,image} = data
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    const { productID } = req.params
    const singleProduct = products.find((product)=>product.id === +productID)
    res.json(singleProduct)
})

app.listen(50000,()=>{
    console.log('Server is listening at 50000')
})