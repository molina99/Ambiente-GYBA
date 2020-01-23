import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import User from './User';

const Rol = sequelize.define('roles',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
},{
    timestamps: false
});

Rol.hasMany(User, { foreignKey: 'id_rol', sourceKey: 'id'});
User.belongsTo(Rol, { foreignKey: 'id_rol', sourceKey: 'id'});

export default Rol;