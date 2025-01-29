const {getAllSalesByIdUser, getSaleByIdUser, createSale, confirmSale} = require("../models/ventaModele")

const getSales = async (req, res, next) => {
    const id_user = req.body.id_user
    try {
        const {rows} = await getAllSalesByIdUser(id_user)
        if(!rows){
            res.status(400).json({
                message: "SALES NOTFOUND",
                
            })
        }
        res.json({ventas: rows})
        
    } catch (error) {
        next(error)
        
    }
}

const getSale = async (req, res, next) => {
    const id_user = req.body.id_user
    try {
        const {rows} = await getSaleByIdUser(id_user)
        if(!rows){
            res.status(400).json({
                message: "SALE NOTFOUND",
                
            })
        }
        res.json({ventas: rows})
        
    } catch (error) {
        next(error)
        
    }
}


const createSales = async (req, res, next) => {
   
    try{
        const sale = await createSale(req.body)
        if(!sale){
            return res.status(400).json({
                message: "ERROR AL CREAR EL PRODUCTO ",
            })
        }
        res.status(201).json({
            message: "VENTA CREADO CORRECTAMENTE",
            sale: sale
        })
      
    }
    catch(error) { next(error) }
   

}

const confirmSales = async (saleId, status) => {
    try{
        const producto = await confirmSale(saleId, status)
        if(!producto){
            return {
                message: "ERROR AL CONFIRMAR LA VENTA VERFICA TU INFORMACIÓN ",
            }
        }
        return {
            message: "VENTA CONFIRMADA CORRECTAMENTE",
            producto: producto
        }
    }
    catch(error) { throw error}
   
}


module.exports = {
    getSales,
    getSale,
    createSales,
    confirmSales
}