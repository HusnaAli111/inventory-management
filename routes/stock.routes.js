const router = require("express").Router()
const Product = require("../models/Product")

router.get('/new', async (req, res) => {

    const products = await Product.find()

    res.render('stock-new.ejs', {products: products})

})


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