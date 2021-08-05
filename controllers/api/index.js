const router = require('express').Router();
const userRoutes = require('./userRoutes');
const piggyRoutes = require('./piggyRoutes');
// const requestRoutes = require('./requestRoutes');

router.use('/users', userRoutes);
router.use('/piggy', piggyRoutes);
// router.use('/requests', requestRoutes);

module.exports = router;
