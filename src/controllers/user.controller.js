import User from "../models/User";

export async function getUser(req, res) {
  try {
    const users = await User.findAll();
    res.json({
      data: users
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserId(req, res) {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id
    }
  });
  res.json({
    data: user
  });
}

export async function createUser(req, res) {
  const { id_rol, nombre_usuario, email, clave } = req.body;
  try {
    let newUser = await User.create(
      {
        id_rol,
        nombre_usuario,
        email,
        clave
      },
      {
        fields: ["id_rol", "nombre_usuario", "email", "clave"]
      }
    );
    if (newUser) {
      res.json({
        message: "User created successfully",
        data: newUser
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {}
    });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  const deleteUser = await User.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "User deleted succesfully",
    count: deleteUser
  });
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { id_rol, nombre_usuario, email, clave } = req.body;
  const users = await User.findAll({
    attributes: ["id", "id_rol", "nombre_usuario", "email", "clave"],
    where: {
      id
    }
  });

  if (users.length > 0) {
    users.forEach(async user => {
      await user.update({
        id_rol,
        nombre_usuario,
        email,
        clave
      });
    });
  }

  return res.json({
    message: "User updated succesfully",
    data: users
  });
}

export async function getUserByRol(req, res) {
    const { id_rol } = req.params;
    const users = await User.findAll({
        attributes: ["id", "id_rol", "nombre_usuario", "email", "clave"],
        where: {
            id_rol
        }
    });
    res.json({users})
}
