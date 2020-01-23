import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'ambiente_gyba',
    'postgres',
    '123',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);