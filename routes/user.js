var express = require("express")
var router = express.Router()
const users = require("../query/users_query")

// get individual user by userId
router.get("/individual", async function (req, res, next) {
    var user = await users.getUser(req.body.userId)
    if (user) return res.send({ success: true, user: user })
    res.send({ success: false })
})

//create new user
router.post("/create", async function (req, res) {
    var newUser = await users.createUser(req.body)
    if (newUser)
        return res.send({
            create_success: true,
            user: newUser,
        })
    res.send({ create_success: false })
})

module.exports = router
