const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require('../config/connection');


class Request extends Model {}

Request.init({
    username:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    hooks:{
        beforeCreate: async  (newRequestData)=>{
            newRequestData.password = bcrypt.hashSync(newRequestData.password,10);
            return newRequestData;
        },
        beforeBulkCreate: async  (newRequestData)=>{
            const hashedPasswords = newRequestData.map(newRequest=>{
                newRequest.password = bcrypt.hashSync(newRequest.password,10);
                return newRequest;
            })
            return hashedPasswords;
        }
    },
    sequelize
})

module.exports = Request
