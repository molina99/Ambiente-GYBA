import Rol from "../models/Rol";

export async function getRol(req, res) {
  try {
    const roles = await Rol.findAll();
    res.json({
      data: roles
    });
  } catch (error) {
      console.log(error);
  }
}

export async function getRolId(req, res){
    const { id } = req.params;
    const rol = await Rol.findOne({
        where:{
            id
        }
    });
    res.json({
        data: rol
    })
}

export async function createRol(req, res) {
  const { nombre } = req.body;
  try {
    let newRol = await Rol.create(
      {
        nombre
      },
      {
        fields: ["nombre"]
      }
    );
    if (newRol) {
      res.json({
        message: "Rol created successfully",
        data: newRol
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


export async function deleteRol(req, res){
    const { id } = req.params;
    const deleteRol = await Rol.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Rol deleted succesfully',
        count: deleteRol
    });
}

export async function updateRol(req, res){
    const { id } = req.params;
    const { nombre } = req.body;
    const roles = await Rol.findAll({
        attributes: [ 'id', 'nombre' ],
        where: {
            id
        }
    });

    if(roles.length > 0){
        roles.forEach(async rol =>{
            await rol.update({
                nombre
            });
        })
    }

    return res.json({
        message: 'Rol updated succesfully',
        data: roles
    });
}