const express = require("express")
const auth = require("../controllers/controllerAuth")
const {validateBodyUser} = require("../middleware/cleanBody")
const router = express.Router()


router.post("/singup", validateBodyUser, auth.signUp)
router.post("/singin", validateBodyUser, auth.signIn)
router.post("/singout", auth.signOut)

module.exports = router