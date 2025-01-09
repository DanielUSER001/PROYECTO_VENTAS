const {getAllSalesByIdUser, getSaleByIdUser, createSale, confirmSale} = require("../models/ventaModele")

const getSales = async (req, res) => {
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

const getSale = async (req, res) => {
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

const confirmSales = async (req, res, next) => {
    try{
        const producto = await confirmSale(req.params.id, req.body.estado)
        if(!producto){
            return res.status(400).json({
                message: "ERROR AL CONFIRMAR LA VENTA VERFICA TU INFORMACIÓN ",
            })
        }
        res.status(200).json({
            message: "VENTA CONFIRMADA CORRECTAMENTE",
            producto: producto
        })
    }
    catch(error) { next(error) }
   

}


module.exports = {
    getSales,
    getSale,
    createSales,
    confirmSales
}