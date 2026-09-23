const User = require("../models/User");

async function isAdmin(req, res, next) {

    const user = await User.findById(req.session.user);

    if (user.role === "admin") {
        next()
    } else {
        res.send("Access denied");
    }

}

module.exports = isAdmin;