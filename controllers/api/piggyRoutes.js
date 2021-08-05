const router = require('express').Router();
const { Piggy, User } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const PiggyData = await Piggy.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(PiggyData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const PiggyData = await Piggy.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!PiggyData) {
      res.status(404).json({ message: 'Aint no piggy here by that name!' });
      return;
    }

    res.status(200).json(piggyData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const requestData = await Piggy.create({
      reader_id: req.body.user_id,
    });
    res.status(200).json(requestData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const piggyData = await piggy.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!piggyData) {
      res.status(404).json({ message: 'Aint no piggy here by that name!' });
      return;
    }

    res.status(200).json(piggyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
