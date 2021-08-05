const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Piggy extends Model { }

Piggy.init({

    name: {
        type: DataTypes.TEXT
    },
    breed: {
        type: DataTypes.TEXT
    },
    birthdate: {
        type: DataTypes.TEXT
    },
    sex: {
        type: DataTypes.TEXT
    },
    weight: {
        type: DataTypes.TEXT
    },
    location: {
        type: DataTypes.TEXT
    },
    farm_name: {
        type: DataTypes.TEXT
    },
    image_link: {
        type: DataTypes.TEXT
    }
},
    { sequelize} 
)

module.exports = Piggy