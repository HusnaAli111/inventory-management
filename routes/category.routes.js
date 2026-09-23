//this is for admin role
const router = require("express").Router();
const Category = require("../models/Category.js");

//adding categories
router.get("/new", (req, res) => {

    res.render("category-new.ejs")

})

router.post("/", async (req, res) => {

    await Category.create({name: req.body.name})

    res.redirect("/products/new")

})


module.exports = router;