const router = require("express").Router()
const Product = require("../models/Product")

// Stock movement form
router.get('/new', async (req, res) => {
//get all products
    const products = await Product.find()
//send the product to the stock form
    res.render('stock-new.ejs', {products: products})

})

//add or remove stock
router.post('/', async (req, res) => {
    const product = await Product.findById(req.body.product)
    const quantity = Number(req.body.quantity)
    if (req.body.type === 'IN') {
        product.quantity += quantity
    }
    if (req.body.type === 'OUT') {
        product.quantity -= quantity
    }

    const stockedit=await Product.findByIdAndUpdate(req.body.product, {quantity:product.quantity})
    res.redirect('/products')

})


module.exports = router