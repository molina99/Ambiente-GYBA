import CuentaUser from "../models/CuentaUser";

export async function getCuentaUser(req, res) {
  try {
    const cuentasUser = await CuentaUser.findAll();
    res.json({
      data: cuentasUser
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCuentaUserId(req, res) {
  const { id } = req.params;
  const cuentaUser = await CuentaUser.findOne({
    where: {
      id
    }
  });
  res.json({
    data: cuentaUser
  });
}

export async function createCuentaUser(req, res) {
  const { id_persona, score } = req.body;
  try {
    let newCuentaUser = await CuentaUser.create(
      {
        id_persona,
        score
      },
      {
        fields: ["id_persona", "score"]
      }
    );
    if (newCuentaUser) {
      res.json({
        message: "CuentaUser created successfully",
        data: newCuentaUser
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

export async function deleteCuentaUser(req, res) {
  const { id } = req.params;
  const deleteCuentaUser = await CuentaUser.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "CuentaUser deleted succesfully",
    count: deleteCuentaUser
  });
}

export async function updateCuentaUser(req, res) {
  const { id } = req.params;
  const { id_persona, score } = req.body;
  const cuentasUser = await CuentaUser.findAll({
    attributes: ["id", "id_persona", "score"],
    where: {
      id
    }
  });

  if (cuentasUser.length > 0) {
    cuentasUser.forEach(async cuentaUser => {
      await cuentaUser.update({
        id_persona,
        score
      });
    });
  }

  return res.json({
    message: "CuentaUser updated succesfully",
    data: cuentasUser
  });
}

export async function getCuentaUserByUser(req, res) {
  const { id_persona } = req.params;
  const cuentasUser = await CuentaUser.findAll({
    attributes: ["id", "id_persona", "score"],
    where: {
      id_persona
    }
  });
  res.json({ cuentasUser });
}
