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
      img_link: "https://www.thespruce.com/thmb/BP-Kbk6kNJJIbjC92-MJSEXqvZs=/2087x1436/filters:no_upscale():max_bytes(150000):strip_icc()/yorkshire-piglet-518931638-5c53bbcc46e0fb00013fabd5.jpg"

    },
    {
      name: "Oinkers",
      breed: "Aksai Black Pied",
      birthdate: "7/5/2021",
      sex: "male",
      weight: "7 lbs",
      location: "Oregon",
      farm_name: "Big Pig Farms",
      img_link: "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/6/6f/Cute_piggy.jpg/440px-Cute_piggy.jpg"
    },
    {
      name: "Taco",
      breed: "Vietnamese Potbelly Pig",
      birthdate: "6/11/2021",
      sex: "male",
      weight: "9 lbs",
      location: "Washington",
      farm_name: "Pig Exotics",
      img_link: "https://www.thesprucepets.com/thmb/md4sOs27MRN9GMYDQnXS0HTNiqk=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp4f6d8346WEU100_Medium_108459-591084a23df78c9283d101d2.jpg"

    },
    {

      name: "Fudge",
      breed: "Dystopian Swine",
      birthdate: "8/9/2021",
      sex: "very male",
      weight: "14 lbs",
      location: "Wyoming",
      farm_name: "Chopping Chops Farm",
      img_link: "https://i.pinimg.com/originals/df/ec/cd/dfeccd75cc160c68cc396d12c26bd8ca.jpg"
    }

  ]);
  console.log('seeded');
  process.exit(0);
};

plantSeeds()