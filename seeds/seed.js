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

  await db.Farmer.bulkCreate([
    {
        username: "farmer123",
        email: "pigfarms@farm.com",
        password: "password"
      },
      {
        username: "southsidefarms",
        email: "wedownsouth@farm.com",
        password: "password"
      },
      {
        username: "1lovepigs",
        email: "pigmaster@pigs.com",
        password: "password"
      }
    ]);
  await db.Piggy.bulkCreate([
        {
            name: "Charlotte",
            isCute: true,
            FarmerID: "1"
        },
        {
            name: "Spot",
            isCute: true,
            FarmerID: "1"
        },
        {
            username: "Sir Oinks Alot",
            isCute: true,
            FarmerID: "2"
        }
        ]);
    console.log('seeded');
    process.exit(0);
};

plantSeeds()