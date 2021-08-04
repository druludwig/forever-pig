const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Request extends Model {}

Request.init({
    piggyID:{
        type:DataTypes.NUMBER,
        allowNull:false
    }, 
},{
    sequelize
})

module.exports = Request
