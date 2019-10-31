const express = require('express')
const upload = require('../../config/photoStorage')
const router = express.Router()
const db = require('../../config/database')

// Product Model
const Product = require('../../models/Product')

// Get all products
router.get('/', async (req, res) => {
    let product = await Product.findAll()
    console.log(product)
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

// Find all products for a certain category
router.get('/category/:handle', async (req, res) => {
    const { handle } = req.params
    let response = await db.query('SELECT * FROM products WHERE category = :handle', { replacements: { handle }})
    res.send(response[0])
})

// Search for a product
router.get('/search/:query', async (req, res) => {
    let { query } = req.params
    query = query + '%'
    query = query.toLowerCase()
    
    let response = await db.query(`SELECT * FROM products WHERE LOWER (products.name) LIKE :query `, { replacements: { query } })
    res.send(response[0])
})

// Post photos to product
router.post('/photos/:product_id', upload.array('photo', 5), (req, res) => {
    const productId = req.params.product_id
    const relativePathList = req.files.map(file => file.path.substring(10))

    if (!req.files) {
        console.log('no files were received')
        res.status(400)
        res.send('no files were received')
        return
    }

    const promises = relativePathList.map(path => db.query('INSERT INTO product_photos(product_id, photo_url) VALUES( (SELECT product_id FROM products WHERE product_id= :productId), :path )'
    ,   {
        replacements: {
            productId,
            path,
        }
    }))

    Promise.all(promises).then(() => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

// Get photos of a product
router.get('/photos/get/:product_id', async (req, res) => {
    const { product_id } = req.params
    let photos = await db.query('SELECT photo_url FROM product_photos WHERE product_id = :product_id', { replacements: { product_id } })
    res.send(photos[0])
})

module.exports = router