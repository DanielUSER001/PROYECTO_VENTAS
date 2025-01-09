const pg = require("../config/config")

const getAllSalesByIdUser = async(id_user) => {
    try{
        const {rows} = await pg.query("SELECT * FROM venta WHERE id_user = $1", [id_user])
        if(rows){
            return rows
        }

    }
    catch(error) {
        throw error
    }
    
}

const getSaleByIdUser = async(id_user) => {
    try{
        const {rows} = await pg.query("SELECT * FROM venta WHERE id_user = $1 LIMIT 1", [id_user])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
    
}

const createSale = async(venta) => {
    
    const {id_user, estado, total} = venta
    try{
        const {rows} = await pg.query("INSERT INTO  venta (id_user, estado, total) VALUES ($1, $2, $3) RETURNING *", [id_user, estado, total])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
}

const confirmSale = async(id, estado) => {
    try{
        const {rows} = await pg.query("UPDATE venta SET estado = $1 WHERE id = $2 RETURNING *", [estado, id])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
}


module.exports = {
    getAllSalesByIdUser,
    getSaleByIdUser,
    createSale,
    confirmSale

}
