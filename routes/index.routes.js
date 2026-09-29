const router = require("express").Router()
const isAdmin = require("../middleware/is-admin.js")
const Product = require("../models/Product.js")
const StockMovement = require("../models/stockMovement.js")
const Category=require('../models/Category.js')

//landing page 
router.get('/', (req, res) => {

    res.render('landing.ejs')

})
//dashboard
router.get('/dashboard', async (req, res) => {
// get all products and categories
    const products = await Product.find().populate("category")
    //get the catgeory 
    const categories = await Category.find()
    // get all stock
    const stockMovements = await StockMovement.find()

    // Calculate the total stock quantity
    let stock = 0
    products.forEach((product)=>{
        stock += product.quantity
    })
// send the data to the dashboard
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
