const pg = require("../config/db")

const getAllProducts = async() => {
    try{
        const {rows} = await pg.query("SELECT * FROM productos")
        if(rows){
            return rows
        }

    }
    catch(error) {
        throw error
    }
    
}

const getProductById = async(id) => {
    try{
        const {rows} = await pg.query("SELECT * FROM productos WHERE id = $1", [id])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
    
}

const createProduct = async(producto) => {
    const {name, price, image} = producto
    try{
        const {rows} = await pg.query("INSERT INTO  productos (name, price, image) VALUES ($1, $2, $3) RETURNING *", [name, price, image])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
}

const updateProductById = async(id, producto) => {
    const {name, price, image} = producto
    try{
        const {rows} = await pg.query("UPDATE productos SET name = $1, price = $2, image = $3 WHERE id = $4 RETURNING *", [name, price, image, id])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
}


const deleteProduct = async(id) => {

    try{
        const {rows} = await pg.query("DELETE FROM productos WHERE id = $1 RETURNING *", [id])
        if(rows){
            return rows[0]
        }

    }
    catch(error) {
        throw error
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProduct

}
