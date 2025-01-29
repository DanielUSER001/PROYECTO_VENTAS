const supabase = require("../config/supabase");
const { createUser } = require("../models/user.models");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return res.status(400).json({
        message: "error al crear el usuario",
        error: error.message,
      });
    }
    res.status(200).json({
      message: "usuario creado correctamente",
      data: data.user,
    });
    //  CREAR USUARIO EN LA DB DE POSTGRES
    await createUser({
      role: "usuario",
      id_auth_supabase: data.user.id,
      name: "GENERIC",
    });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return res.status(400).json({
        message: "error al iniciar sessión",
        error: error.message,
      });
    }
    res.status(200).json({
      message: "se inicio sessión correctamente",
      session: data.session,
    });
  } catch (error) {
    next(error);
  }
};

const signOut = async (req, res) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return res.status(400).json({
      message: error.message,
      status: error.status,
    });
  }
  res.status(200).json({
    message: "sessón cerrada exitosamente",
  });
};

module.exports = {
  signIn,
  signUp,
  signOut,
};
