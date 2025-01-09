const express = require("express")
const router = express.Router()
const { createOrders, captureOrders } = require("../controllers/paypal.controller")
const path = require('path');

router.post("/create", createOrders)
router.get("/capture", captureOrders, (req, res) => { // Asegúrate de que la ruta del archivo HTML sea correcta 
    const htmlFilePath = path.join(__dirname, '../../public', 'home.html');
    res.sendFile(htmlFilePath)
})

module.exports = router