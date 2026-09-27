const router = require("express").Router()
const isAdmin = require("../middleware/is-admin.js")
const Product = require("../models/Product.js");

router.get('/', async (req, res) => {
    const products = await Product.find().populate("category")
    res.render('homepage.ejs', {products: products})

})

router.get("/admin", isAdmin, (req, res) => {

    res.send("Welcome Admin")

})

module.exports = router;
