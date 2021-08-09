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
      sex: "Female",
      weight: "13 lbs",
      location: "Boise, Idaho",
      farm_name: "Sweet Potato Farms",
      bio_short: "I'm Charlotte and I'll have anxiety squeals when you try to leave the house",
      bio_full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, tempore exercitationem nemo inventore voluptas commodi sed corporis harum pariatur? Distinctio dolorem laudantium dolores dignissimos explicabo deserunt nam asperiores excepturi.",
      image_name: "001.jpg"
    },
    {
      name: "Oinkers",
      breed: "Vietnamese Potbelly Pig",
      birthdate: "7/5/2021",
      sex: "Female",
      weight: "7 lbs",
      location: "Bend, Oregon",
      farm_name: "Big Pig Farms",
      bio_short: "I'm Oinkers and turns out no, I won't get along with your dog",
      bio_full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, tempore exercitationem nemo inventore voluptas commodi sed corporis harum pariatur? Distinctio dolorem laudantium dolores dignissimos explicabo deserunt nam asperiores excepturi.",
      image_name: "002.jpg"

    },
    {
      name: "Taco",
      breed: "Aksai Black Pied",
      birthdate: "6/11/2021",
      sex: "Male",
      weight: "9 lbs",
      location: "Seabeck, Washington",
      farm_name: "Pig Exotics",
      bio_short: "I AM TACO.",
      bio_full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, tempore exercitationem nemo inventore voluptas commodi sed corporis harum pariatur? Distinctio dolorem laudantium dolores dignissimos explicabo deserunt nam asperiores excepturi.",
      image_name: "003.jpg"
    },
    {
      name: "Carl",
      breed: "Hampshire",
      birthdate: "6/7/2021",
      sex: "Male",
      weight: "19 lbs",
      location: "Eugene, Oregon",
      farm_name: "Rainbow Bridge Farms",
      bio_short: "I'm Carl and I'll prove impossible to potty train",
      bio_full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, tempore exercitationem nemo inventore voluptas commodi sed corporis harum pariatur? Distinctio dolorem laudantium dolores dignissimos explicabo deserunt nam asperiores excepturi.",
      image_name: "005.jpeg"
    },
    {
      name: "Cloris",
      breed: "American Yorkshire",
      birthdate: "6/20/2021",
      sex: "Female",
      weight: "17 lbs",
      location: "Vancouver, Washington",
      farm_name: "Porky Pine Farms",
      bio_short: "I'm Cloris and I love Mel Brooks films",
      bio_full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, tempore exercitationem nemo inventore voluptas commodi sed corporis harum pariatur? Distinctio dolorem laudantium dolores dignissimos explicabo deserunt nam asperiores excepturi.",
      image_name: "006.jpeg"
    },
    {
      name: "Wilbur",
      breed: "American Yorkshire",
      birthdate: "6/20/2021",
      sex: "Male",
      weight: "19 lbs",
      location: "Vancouver, Washington",
      farm_name: "Porky Pine Farms",
      bio_short: "I'm Wilbur and I'll have night terrors",
      bio_full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, tempore exercitationem nemo inventore voluptas commodi sed corporis harum pariatur? Distinctio dolorem laudantium dolores dignissimos explicabo deserunt nam asperiores excepturi.",
      image_name: "004.jpg"
    }
  ]);
  console.log('seeded');
  process.exit(0);
};

plantSeeds()