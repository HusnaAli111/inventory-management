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
//this is for where the admin can see the categories that exist
router.get("/", isAdmin, async (req, res) => {

    const categories = await Category.find()
    res.render("categories.ejs", {categories: categories})

})
//edit category for admin

router.get("/:id/edit", isAdmin, async (req, res) => {

    const category = await Category.findById(req.params.id)
    res.render("category-edit.ejs", {category: category})

})

router.put("/:id", isAdmin, async (req, res) => {

    await Category.findByIdAndUpdate(req.params.id, {name: req.body.name})
    res.redirect("/categories")

})




module.exports = router;