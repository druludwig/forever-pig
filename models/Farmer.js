const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require('../config/connection');


class Farmer extends Model {}

Farmer.init({
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
        beforeCreate: async  (newFarmerData)=>{
            newFarmerData.password = bcrypt.hashSync(newFarmerData.password,10);
            return newFarmerData;
        },
        beforeBulkCreate: async  (newFarmerData)=>{
            const hashedPasswords = newFarmerData.map(newFarmer=>{
                newFarmer.password = bcrypt.hashSync(newFarmer.password,10);
                return newFarmer;
            })
            return hashedPasswords;
        }
    },
    sequelize
})

module.exports = Farmer
