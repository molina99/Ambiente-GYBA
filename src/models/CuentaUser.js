import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const CuentaUser = sequelize.define('juego_cuentas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_persona:{
        type: Sequelize.INTEGER
    },
    score:{
        type: Sequelize.INTEGER
    },
},{
    timestamps: false
});


export default CuentaUser;