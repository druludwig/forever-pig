const router = require('express').Router();
const userRoutes = require('./userRoutes');
const piggyRoutes = require('./piggyRoutes');


router.use('/users', userRoutes);
router.use('/piggy', piggyRoutes);


module.exports = router;
