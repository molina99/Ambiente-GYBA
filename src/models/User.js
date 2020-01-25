import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import CuentaUser from './CuentaUser';

const User = sequelize.define('personas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_rol:{
        type: Sequelize.INTEGER,
    },
    nombre_usuario:{
        type: Sequelize.TEXT
    },
    email:{
        type: Sequelize.TEXT
    },
    clave:{
        type: Sequelize.TEXT
    },
},{
    timestamps: false
});

User.hasMany(CuentaUser, { foreignKey: 'id_persona', sourceKey: 'id'});
CuentaUser.belongsTo(User, { foreignKey: 'id_persona', sourceKey: 'id'});

export default User;