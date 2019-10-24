const express = require('express')
const router = express.Router()
const db = require('../../config/database')

// Product Model
const Product = require('../../models/Product')

// Get all products
router.get('/', async (req, res) => {
    let product = await Product.findAll()
    res.send(product)
})

// Post a new product
router.post('/post', async (req, res) => {
    const { user_id, name, description, price, category, confirmation } = req.body

    let newProduct = await Product.create({
        user_id,
        name,
        description,
        price,
        category,
        confirmation
    })

    res.send(newProduct)
})

// Search for a product
router.get('/search/:query', async (req, res) => {
    let { query } = req.params
    query = query + '%'
    query = query.toLowerCase()
    
    let response = await db.query(`SELECT * FROM products WHERE LOWER (products.name) LIKE :query `, { replacements: { query } })
    res.send(response[0][0])
})

module.exports = router