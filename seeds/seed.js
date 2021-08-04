const sequelize = require("../config/connection");
const db = require("../models");

const plantSeeds = async () => {
  await sequelize.sync({ force: true });
  await db.User.bulkCreate([
    {
      username: "Dru",
      email: "dru@foreverpigs.com",
      password: "password"
    },
    {
      username: "Zach",
      email: "zach@foreverpigs.com",
      password: "password"
    },
    {
      username: "Jared",
      email: "jared@foreverpigs.com",
      password: "password"
    }
  ]);
  await db.Piggy.bulkCreate([
        {
            name: "Charlotte",
            breed: "American Yorkshire",
            age: "10 days",
            sex: "female",
            weight: "13 lbs",
            location: "Idaho",
            farm_name: "Sweet Potato Farms",
        },
        {
            name: "Oinkers",
            breed: "Aksai Black Pied",
            age: "14 days",
            sex: "male",
            weight: "7 lbs",
            location: "Oregon",
            farm_name: "Big Pig Farms"
        },
        {
            name: "Taco",
            breed: "Vietnamese Potbelly Pig",
            age: "13 days",
            sex: "male",
            weight: "9 lbs",
            location: "Washington",
            farm_name: "Pig Exotics"
        },

        ]);
    console.log('seeded');
    process.exit(0);
};

plantSeeds()