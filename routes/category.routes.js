//this is for admin role
const router = require("express").Router()
const Category = require("../models/Category.js")
const isAdmin = require("../middleware/is-admin.js")
//adding categories
router.get("/new", isAdmin, (req, res) => {
    res.render("category-new.ejs")

})

router.post("/", isAdmin, async (req, res) => {
    await Category.create({name: req.body.name})

    res.redirect("/products/new")

})


module.exports = router;