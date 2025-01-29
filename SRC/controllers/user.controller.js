const { getUserById_SP, createUser } = require("../models/user.models");

const getUser = async (req, res, next) => {
  const user_id = req.params.id;
  console.log(user_id);
  try {
    const user = await getUserById_SP(user_id);
    if (!user) {
      return res.status(400).json({
        message: "USER NOTFOUND",
      });
    }
    res.json({
      message: "USER FOUNDED",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

const createUsers = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    if (!user) {
      return res.status(400).json({
        message: "ERROR AL CREAR EL USUARIO",
      });
    }
    res.status(201).json({
      message: "USER CREATED",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  createUsers,
};
