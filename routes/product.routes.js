const router = require("express").Router()
const Category = require("../models/Category");
const Product = require('../models/Product')

// create the product - form
router.get('/new', async(req, res) => {
    const categories = await Category.find()
    res.render('new.ejs',{categories:categories});
})
// product create
router.post('/', async (req, res) => {

    const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        minStock: req.body.minStock,
        category: req.body.category
    });

    res.redirect('/products');
});
// view all products
router.get('/', async (req, res) => {

    const products = await Product.find();

    res.render('allProduct.ejs', { products });
});



module.exports = router;
