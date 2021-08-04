const Request = require("./User");
const Piggy = require("./Piggy");

Request.hasMany(Piggy);
Piggy.belongsTo(Request);

module.exports = {
    Request,
    Piggy
}