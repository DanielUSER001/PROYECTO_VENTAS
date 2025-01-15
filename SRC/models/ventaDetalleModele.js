const pg = require("../config/db")

const getAllDetailsByIdUser = async(id_user) => {
    try{
        const {rows} = await pg.query("SELECT * FROM detalle_venta WHERE id_user = $1", [id_user])
        if(rows){
            return rows
        }

    }
    catch(error) {
        throw error
    }
    
}


const getDetailById = async(id_venta) => {
    try{
        const {rows} = await pg.query("SELECT * FROM detalle_venta WHERE id_venta = $1 LIMIT 1", [id_venta])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
    
}

const createSaleDetail = async(id_venta,venta) => {
    const {id_producto, descripcion, precio_venta, cantidad, sub_total} = venta

    try{
        const {rows} = await pg.query("INSERT INTO  detalle_venta (id_venta, id_producto, descripcion, precio_venta, cantidad, sub_total) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [id_venta, id_producto, descripcion, precio_venta, cantidad, sub_total])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
}




module.exports = {
    getAllDetailsByIdUser,
    getDetailById,
    createSaleDetail

}
