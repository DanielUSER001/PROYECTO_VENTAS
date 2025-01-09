const modeleProducto = require("../models/Productos")

const getAllProduct = async (req, res, next) => {
    try{
        const producto = await modeleProducto.getAllProducts(req.body)
        res.status(200).json({
            message: "LISTA DE TODOS LOS PRODUCTOS",
            producto: producto
        })
    }
    catch(error) { next(error) }
   

}
const getProductById = async (req, res, next) => {
    try{
        const producto = await modeleProducto.getProductById(req.params.id)
        if(!producto){
            return res.status(400).json({
                message: "PRODUCTO NO ENCONTRADO ",
            })
        }
        res.status(200).json({
            message: "PRDOCTO SELECIONADO",
            producto: producto
        })
    }
    catch(error) { next(error) }
   

}

const createProduct = async (req, res, next) => {
    try{
        const producto = await modeleProducto.createProduct(req.body)
        if(!producto){
            return res.status(400).json({
                message: "ERROR AL CREAR EL PRODUCTO ",
            })
        }
        res.status(201).json({
            message: "PRODUCTO CREADO CORRECTAMENTE",
            producto: producto
        })
    }
    catch(error) { next(error) }
   

}

const updateProduct = async (req, res, next) => {
    try{
        const producto = await modeleProducto.updateProductById(req.params.id, req.body)
        if(!producto){
            return res.status(400).json({
                message: "ERROR AL ACTUALIZAR EL PRODUCTO VERFICA TU INFORMACIÓN ",
            })
        }
        res.status(200).json({
            message: "PRODUCTO ACTUALIZADO CORRECTAMENTE",
            producto: producto
        })
    }
    catch(error) { next(error) }
   

}


const deleteProduct = async (req, res, next) => {
    try{
        const producto = await modeleProducto.deleteProduct(req.params.id)
        if(!producto){
            return res.status(400).json({
                message: "ALGO FALLO AL ELIMINAR EL PRODUCTO",
            })
        }
        res.status(200).json({
            message: "PRODUCTO ELIMINADO CORRECTAMENTE",
            producto: producto
        })
    }
    catch(error) { next(error) }
   

}




module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}