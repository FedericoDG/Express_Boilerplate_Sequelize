const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const http = require("http")
const path = require("path")
const socketio = require("socket.io")
require("dotenv").config()

const { sequelize } = require("../database/models")
const Sockets = require("./sockets")

class Server {
  constructor() {
    this.app = express()
    this.PORT = process.env.PORT || 3005
    this.server = http.createServer(this.app)
    this.io = socketio(this.server, {
      /* config */
    })

    this.demo = "/api/demo"

    this.middlewares()
    this.routes()
  }

  configurarSockets() {
    new Sockets(this.io)
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static("public"))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(
      fileUpload({ useTempFiles: true, tempFileDir: "./app/public/uploads" })
    ),
      this.app.use(express.static(path.resolve(__dirname, "../public")))
  }

  routes() {
    this.app.use(this.demo, require("../routes/demo.routes.js"))
  }

  execute() {
    this.server.listen(this.PORT, async () => {
      try {
        await sequelize.authenticate()
        if (process.env.NODE_ENV === "test") return
        console.clear()
        console.log("----------------------------")
        console.log("Server live on port", this.PORT)
        console.log("MySQL connection established")
        console.log("----------------------------")
      } catch (error) {
        throw new Error(error)
      }
    })
  }
}

module.exports = Server
