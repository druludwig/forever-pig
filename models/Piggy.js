const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Piggy extends Model {}

Piggy.init({
    name:{
        type:DataTypes.TEXT
    },
    isCute:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    }
},{sequelize})

module.exports = Piggy