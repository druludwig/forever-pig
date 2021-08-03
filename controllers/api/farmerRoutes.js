const router = require('express').Router();
const { Farmer, User, Piggy } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const farmerData = await Farmer.findAll();
    res.status(200).json(farmerData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const farmerData = await Farmer.findByPk(req.params.id, {
      include: [{ model: User, through: Piggy, as: 'farmer_user' }]
    });

    if (!farmerData) {
      res.status(404).json({ message: 'Aint no dang ol farmer with that id!' });
      return;
    }

    res.status(200).json(farmerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const farmerData = await Farmer.create(req.body);
    res.status(200).json(farmerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const farmerData = await Farmer.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!farmerData) {
      res.status(404).json({ message: 'Aint no dang ol farmer with that id!' });
      return;
    }

    res.status(200).json(farmerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
