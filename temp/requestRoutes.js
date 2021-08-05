const router = require('express').Router();
const { Request, User, Piggy } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const requestData = await Request.findAll();
    res.status(200).json(requestData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const requestData = await Request.findByPk(req.params.id, {
      include: [{ model: User, through: Piggy, as: 'request_user' }]
    });

    if (!requestData) {
      res.status(404).json({ message: 'Aint no dang ol request with that id!' });
      return;
    }

    res.status(200).json(requestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const requestData = await Request.create(req.body);
    res.status(200).json(requestData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const requestData = await Request.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!requestData) {
      res.status(404).json({ message: 'Aint no dang ol request with that id!' });
      return;
    }

    res.status(200).json(requestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
