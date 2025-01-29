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
const userRoutes = require("./routes/user.routes.js")
const app = express();


app.use(cors())
app.use(helmet())
app.use(body_parser.json())



app.use("/api/auth", authRoute) //ENDPOINT PARA  LOGINS Y REGISTROS
app.use("/api/cart", cartRoutes)
app.use("/api/payment", paymentRoutes) // ENDPONT
app.use("/api/product", productdRoute) //ENDPOINT PARA GESTIONAR PRODUCTOS
app.use("/api/users", userRoutes) //ENDPOINT PARA GESTIONAR USUARIOS
app.use(errorHandler) // CONTROLADOR DE ERRORES



const PORT = process.env.DB_PORT || 3000
app.listen(PORT, ()=> {
    console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT)
})
