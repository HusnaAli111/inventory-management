const express = require("express")
const router = express.Router()

module.exports = router

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {

    res.send("File uploaded successfully")

})