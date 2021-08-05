const sequelize = require("../config/connection");
const db = require("../models");

const plantSeeds = async () => {
  await sequelize.sync({ force: true });
  await db.User.bulkCreate([
    {
      first_name: "Dru",
      last_name: "Lastname",
      email: "dru@foreverpigs.com",
      password: "password"
    },
    {
      first_name: "Zach",
      last_name: "Lastname",
      email: "zach@foreverpigs.com",
      password: "password"
    },
    {
      first_name: "Jared",
      last_name: "Lastname",
      email: "jared@foreverpigs.com",
      password: "password"
    }
  ]);
  await db.Piggy.bulkCreate([
    {
      name: "Charlotte",
      breed: "American Yorkshire",
      birthdate: "7/30/2021",
      sex: "female",
      weight: "13 lbs",
      location: "Idaho",
      farm_name: "Sweet Potato Farms",

    },
    {
      name: "Oinkers",
      breed: "Aksai Black Pied",
      birthdate: "7/5/2021",
      sex: "male",
      weight: "7 lbs",
      location: "Oregon",
      farm_name: "Big Pig Farms"
    },
    {
      name: "Taco",
      breed: "Vietnamese Potbelly Pig",
      birthdate: "6/11/2021",
      sex: "male",
      weight: "9 lbs",
      location: "Washington",
      farm_name: "Pig Exotics"
    },
    {
      name: "Jose",
      breed: "unknown",
      birthdate: "unknown",
      sex: "unknown",
      weight: "unknown",
      location: "unknown",
      farm_name: "unknown"
    }

  ]);
  console.log('seeded');
  process.exit(0);
};

plantSeeds()