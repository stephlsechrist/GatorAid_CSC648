  
const express = require('express')
const router = express.Router()

// Imports
const product = require('./product')

// Routes
router.use('/product', product)

module.exports = router