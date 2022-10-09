const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params
    const searchedProducts = products.find((product)=>+productID === product.id)
    res.json(searchedProducts)
})

app.get('/api/query',(req,res)=>{
    console.log(req)
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
     sortedProducts = products.filter((product)=>{
        return product.name.startsWith(search)
     })

     if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
     }

     if(sortedProducts.length < 1){
        return res.status(200).json({
            success:200,
            data:[ ]
        })
     }
     return res.status(200).json(sortedProducts)
    }
    res.status(200).json(sortedProducts)
})

app.listen(50000,()=>{
    console.log('Server listening at 50000')
})