const router = require("express").Router()
const isAdmin = require("../middleware/is-admin.js")

router.get('/',(req,res)=>{
    res.render('homepage.ejs')
})

router.get("/admin", isAdmin, (req, res) => {

    res.send("Welcome Admin")

})

module.exports = router;
