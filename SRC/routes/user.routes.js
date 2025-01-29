const express = require("express")
const router = express.Router()
const { getUser, createUsers} = require("../controllers/user.controller")

// BUSCAR A UN USUARIO POR EL ID DE SUPABASE
router.get("/:id",  getUser)


module.exports = router