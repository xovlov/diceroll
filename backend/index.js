const express = require("express")
const cors = require('cors')

const app = express()
const http = require("http").Server(app)
const routes = require("./routes.js")

app.use(cors())
app.use("/api", routes)
app.use(function(req, res) {
	res.status(404)
})

http.listen(8080, function() {
	console.log("Listening on port 8080")
})
