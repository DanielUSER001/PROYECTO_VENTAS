const pg = require("../config/db")
const getRoleById = async(idSupabaseUser) => {
    const {rows} = await pg.query("SELECT role FROM usuarios WHERE id_auth_supabase = $1", [idSupabaseUser])
    return rows[0]?.role
}

module.exports = getRoleById