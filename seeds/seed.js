const sequelize = require("../config/connection");
const db = require("../models");

const plantSeeds = async () => {
  await sequelize.sync({ force: true });
  await db.User.bulkCreate([
    {
      first_name: "Dru",
      last_name: "Ludwig",
      email: "dru@foreverpigs.com",
      password: "password"
    },
    {
      first_name: "Zach",
      last_name: "Maurer",
      email: "zach@foreverpigs.com",
      password: "password"
    },
    {
      first_name: "Jared",
      last_name: "Rose",
      email: "jared@foreverpigs.com",
      password: "password"
    },
    {
      first_name: "Leone",
      last_name: "Soth",
      email: "leone@foreverpigs.com",
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
      bio_full: "Charlotte's parents were lost in an attack by the evil cow, Lord VoldeMOOrt. Charlotte has long been thought to be the chosen one, the only pig capable of ending the reign of chocloate milk terror brought to this land by the Dark Bovine.",
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
      bio_full: "Oinkers was named for her penchant for language. She has traced pig dialect back centuries and is the leading researcher in her field, and at the young age of one month, won her very first Pigletzer Award.",
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
      bio_full: "Taco was raised in the barn of Mason Verger. He was raised with a taste for human meat as he was part of a body disposal team. At first enthusiastic for the work, Taco began to feel like his purpose was elsewhere, so he escaped the Verger estate and found refuge at Pig Exotics in Seabeck, Washington",
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
      bio_full: "Carl is Carl. Ask anyone on the farm and thats what they'll have to say about the stoic Hampshire. He keeps to himself but isn't opposed to the idea of love. I think there's a hopeless romantic in there somewhere.",
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
      bio_full: "Cloris is firecracker of a pig! A real spitfire with a love of cinema. She'll regale you for hours with behind-the-scenes stories from Young Frankentein and Silent Movie. Her dream is to one day have her very own blazing saddle.",
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
      bio_full: "Wilbur, named after the hero of Charlotte's Web, bristled when he learned where his moniker came from. He spent some time hanging with a rough crowd by the name of the jerkies, smoking Pork Mall slims and stealing troughs. He's found himself recently and has been donating his time with delinquent piglets, trying to set them off on the right trotter.",
      image_name: "004.jpg"
    }
  ]);
  console.log('seeded');
  process.exit(0);
};

plantSeeds()