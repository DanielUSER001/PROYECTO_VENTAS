const { getAllDetailsByIdUser, getDetailById, createSaleDetail} = require("../models/ventaDetalleModele")
const {getSaleByIdUser} = require("../models/ventaModele")

const getDetails = async (req, res, next) => {
    const id_user = req.body.id_user
    try {
        const {rows} = await getAllDetailsByIdUser(id_user)
        if(!rows){
            res.status(400).json({
                message: "DETAILS NOTFOUND",
                
            })
        }
        res.json({ventas: rows})
        
    } catch (error) {
        next(error)
        
    }
}

const getDetail = async (req, res, next) => {
    const id_venta = req.body.id_venta
    try {
        const {rows} = await getDetailById(id_venta)
        if(!rows){
            res.status(400).json({
                message: "DETAIL NOTFOUND",
                
            })
        }
        res.json({ventas: rows})
        
    } catch (error) {
        next(error)
    }
}


const createDetail = async (req, res, next) => {
    const id_user =  req.body.id_user
    try{
        const venta = await getSaleByIdUser(id_user)
        if(!venta){
            return res.status(400).json({
                message: "ERROR DETALLE VENTA NO FOUND",
            })
        }
        const detail = await createSaleDetail(venta.id, req.body)
        if(!detail){
            return res.status(400).json({
                message: "ERROR AL CREAR EL DETALLE DE VENTA ",
            })
        }
        res.status(201).json({
            message: "DETALLE CREADO CORRECTAMENTE",
            detail: detail
        })
    }
    catch(error) { next(error) }
   

}



module.exports = {
    getDetails,
    getDetail,
    createDetail
}