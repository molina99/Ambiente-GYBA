import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Rol from './Rol';

const User = sequelize.define('personas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_rol:{
        type: Sequelize.INTEGER,
    },
    nombre_usuario:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    clave:{
        type: Sequelize.STRING
    },
},{
    timestamps: false
});

User.hasMany(Rol, { foreignKey: 'id_rol'});
// Rol.belongsTo(User, { foreignKey: 'id_rol'});

export default User;