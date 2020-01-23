import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

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

export default User;