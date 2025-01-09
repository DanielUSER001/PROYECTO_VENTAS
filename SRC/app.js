const express = require("express");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("./middleware/erroHandler");
const helmet = require("helmet");
const cors = require("cors")
const authRoute = require("./routes/authRoute")
const cartRoutes = require("./routes/cart.routes.js")
const productdRoute = require("./routes/prodoctRoute");
const paymentRoutes = require("./routes/payment.routes")
const app = express();


app.use(cors())
app.use(helmet())
app.use(body_parser.json()) 


app.use("/api/auth", authRoute) //ENDPOINT PARA  LOGINS Y REGISTROS
app.use("/api/cart", cartRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/product", productdRoute) //ENDPOINT PARA GESTIONAR PRODUCTOS
app.use(errorHandler) // CONTROLADOR DE ERRORES


app.get('/cancel', (req, res) => { // Asegúrate de que la ruta del archivo HTML sea correcta 
    const htmlFilePath = path.join(__dirname, '../public', 'cancel.html'); 
    res.sendFile(htmlFilePath)});

 


const PORT = process.env.DB_PORT || 3000
app.listen(PORT, ()=> {
    console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT)
})
