const router = require('express').Router();
const userRoutes = require('./userRoutes');
const piggyRoutes = require('./piggyRoutes');
const farmerRoutes = require('./farmerRoutes');

router.use('/users', userRoutes);
router.use('/piggy', piggyRoutes);
router.use('/farmers', farmerRoutes);

module.exports = router;
