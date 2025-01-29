const express = require("express")
const router = express.Router()
const controllerProduct = require("../controllers/controllerProducto")

// MIDDLEWARES FUNCIONES
const {authenticate} = require("../middleware/authenticate")
const {isAdmin} = require("../middleware/isAdmin")
const {validateBobyProduct, validateId} = require("../middleware/cleanBody");

// RUTAS PUBLICAS DE CONSUMIR
router.get("/",  controllerProduct.getAllProduct)
router.get("/:id", validateId, controllerProduct.getProductById)

// RUTAS PROTEGIDAS CON UN LOGIN DE USUARIO
router.post("/", authenticate, isAdmin,  validateBobyProduct, controllerProduct.createProduct)
router.put("/:id", authenticate, isAdmin, [...validateId, ...validateBobyProduct], controllerProduct.updateProduct)
router.delete("/:id", authenticate, isAdmin, validateId, controllerProduct.deleteProduct)

module.exports = router