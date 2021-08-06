const User = require("./User");
const Piggy = require("./Piggy");


User.belongsToMany(Piggy, {
    through:"RequesterRequested",

});

Piggy.belongsToMany(User, {
    through:"RequesterRequested",

});

module.exports = { User, Piggy }