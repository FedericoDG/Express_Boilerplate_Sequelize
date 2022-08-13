const { Router } = require("express")
const router = Router()

// CONTROLADORES
const { demo } = require("../controllers/demo.controllers")

// MIDDLEWARES

// RUTAS
router.get("/", demo)

module.exports = router
