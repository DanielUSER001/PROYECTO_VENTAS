const {body, param} = require("express-validator")

// MIDDLEWARE PARA VALIDAR EL CUERPO DEL PRODUCTO
const validateBobyProduct = [
    body("name")
        .notEmpty().withMessage("Nombre es requerido")
        .isLength({min: 4}).withMessage("El nombre es obligatorio")
        .isString().withMessage("El nombre debe ser valido y un  string")
        .trim().escape(),
    body("price")
        .notEmpty().withMessage("Precio es requerido")
        .isFloat({gt: 0}).withMessage("El precio debe ser un numero valido")
        .toFloat(),
    body("image")
        .optional()
        .isURL().withMessage("la fuente no es correcta o debe ser un string")
        .trim()

]

// MIDDLEWARE PARA VALIDAR EL IDs
const validateId = [ 
    param("id")
    .notEmpty().withMessage("Id es requerido")
    .isInt({gt: 0}).withMessage("id debe ser un numero diferente de cero y entero positivo")
    .toInt()
]


// MIDDLEWARE PARA VALIDAR EL CUERPO DEL USUARIO (EMAIL, PASSWORD)
const validateBodyUser = [
    body("email")
        .notEmpty().withMessage("Email es requerido")
        .isEmail().withMessage("Email no válido")
        .normalizeEmail(),

    body("password")
        .notEmpty().withMessage("Password es requerido")
        .isLength({ min: 6 }).withMessage("Password mínimo 6 caracteres")
  
];



module.exports = {
    validateBobyProduct,
    validateId,
    validateBodyUser
   
}