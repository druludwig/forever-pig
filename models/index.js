const User = require("./User");
const Piggy = require("./Piggy");


User.hasMany(Piggy);

Piggy.belongsTo(User);

module.exports = { User, Piggy }