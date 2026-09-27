const router = require("express").Router()
const isAdmin = require("../middleware/is-admin.js")
const Product = require("../models/Product.js")
const StockMovement = require("../models/stockMovement.js")
const Category=require('../models/Category.js')

router.get('/', async (req, res) => {

    const products = await Product.find().populate("category")
    const categories = await Category.find()
    const stockMovements = await StockMovement.find()

    
    let stock = 0
    products.forEach((product)=>{
        stock += product.quantity
    })

    res.render('homepage.ejs', {
        products: products,
        categories: categories,
        stockMovements: stockMovements,
        stock: stock
    })

})

router.get("/admin", isAdmin, (req, res) => {

    res.send("Welcome Admin")

})

module.exports = router;
