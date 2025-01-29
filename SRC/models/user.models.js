const pg = require("../config/db");

const getRoleById_SP = async (userIdSupabase) => {
  try {
    const { rows } = await pg.query(
      "SELECT role FROM usuarios WHERE id_auth_supabase = $1",
      [userIdSupabase]
    );

    return rows[0]?.role;
  } catch (error) {
    throw error;
  }
};

const getUserById_SP = async (userIdSupabase) => {
  try {
    const { rows } = await pg.query(
      "SELECT * FROM usuarios WHERE id_auth_supabase = $1",
      [userIdSupabase]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  }
};

const createUser = async (userBody) => {
  const { role, id_auth_supabase, name } = userBody;
  try {
    await pg.query("INSERT INTO usuarios (role, id_auth_supabase, name) VALUES ($1, $2, $3) LIMIT 1 RETURNING *",
      [role, id_auth_supabase, name]
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRoleById_SP,
  getUserById_SP,
  createUser,
};
