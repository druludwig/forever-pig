const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
  db.Piggy.findAll()
    .then(userData => {
      res.json(userData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Uh oh!",
        error: err
      })
    })
})

router.get('/:id', (req, res) => {
  db.Piggy.findByPk(req.params.id)
    .then(userData => {
      res.json(userData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Uh oh!",
        error: err
      })
    })
})

router.post("/", (req, res) => {
  db.Piggy.create({
    name: req.body.name,
    breed: req.body.breed,
    birthdate: req.body.birthdate,
    sex: req.body.sex,
    weight: req.body.weight,
    location: req.body.location,
    farm_name: req.body.farm_name,
    bio_short: req.body.bio_short,
    bio_full: req.body.bio_full,
    image_name: "default.jpeg"

  })
    .then(newPiggy => {
      res.json(newPiggy);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error",
        error: err
      })
    })
})

module.exports = router;