const express = require("express")

const router = express.Router()

router.get('/d20', function(req, res, next) {
	res.status(200).send({"roll":Math.floor( Math.random() * (20) + 1)})
})

module.exports = router
