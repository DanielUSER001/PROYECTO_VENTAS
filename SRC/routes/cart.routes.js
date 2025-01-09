const express = require("express")
const router = express.Router()
const {getSales, getSale, createSales, confirmSales} = require("../controllers/controllerSale")
const  { getDetails, getDetail, createDetail} = require("../controllers/controllerDetail")

// MIDDLEWARES FUNCIONES
const {authenticate} = require("../middleware/authenticate")
const {isAdmin} = require("../middleware/isAdmin")




router.post("/", authenticate, isAdmin, createSales) // CREAR VENTA 
router.post("/item", authenticate, isAdmin, createDetail) // CREAR DETALLE DE LA VENTA

/* // VENTAS
router.get("/", getSales)
router.get("/:id", getSale)
router.post("/",  createSales)
router.put("/:id", confirmSales) */


/* // DETALLES DE VENTAS
router.get("/detalle", getDetails)
router.get("/detalle/:id", getDetail)
router.post("/detalle", createDetail)
 */

module.exports = router