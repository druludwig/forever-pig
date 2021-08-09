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

// When a user clicks request, this attaches the pig to the user
router.put('/:id', (req, res) => {
  // Calls the update method on the User model
  db.User.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        isbn: req.params.isbn,
      },
    }
  )
    .then((updatedBook) => {
      // Sends the updated book as a json response
      res.json(updatedBook);
    })
    .catch((err) => res.json(err));
});
module.exports = router;