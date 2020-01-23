import User from '../models/User'

export async function createUser(req, res){
    const { id_rol, nombre_usuario, email, clave } = req.body;
    try{
        let newUser = await User.create({
            id_rol, nombre_usuario, email, clave
        },{
            fields: ['id_rol, nombre_usuario, email, clave']
        });
        if(newUser){
            console.log(newUser);
            res.json({
                message: 'User created successfully',
                data: newUser
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


// const express = require('express');
// var appRoutes   = express.Router();
// var User = require('../models/User');


// export function createUser(req, res){

//         var annotation = new User.create({

//             annotation_date: req.body.annotation-date,

//         }).then(function(user){
//             console.log(user.get({plain:true}))
//         });

//         annotation.save(function(err){
//             if (err)
//                 res.send(err);
//         });
//     };

// module.exports = appRoutes;