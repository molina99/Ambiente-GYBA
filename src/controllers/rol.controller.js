import Rol from '../models/Rol'

export async function createRol(req, res){
    const { nombre } = req.body;
    try{
        let newRol = await Rol.create({
            nombre
        },{
            fields: ['nombre']
        });
        if(newRol){
            res.json({
                message: 'Rol created successfully',
                data: newRol
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    };
};