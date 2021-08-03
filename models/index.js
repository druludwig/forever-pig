const Farmer = require("./User");
const Piggy = require("./Piggy");

Farmer.hasMany(Piggy);
Piggy.belongsTo(Farmer);

module.exports = {
    Farmer,
    Piggy
}