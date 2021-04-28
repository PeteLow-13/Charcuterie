import express from 'express'
import dotenv from 'dotenv'
import products from './data/foodItems.js'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('API is runing...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(PORT, console.log(`Sever running in ${process.env.NODE_ENV} on port: ${PORT}`))