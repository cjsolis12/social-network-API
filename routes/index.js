const router = require('express').Router();
const { errorHandler } = require('../middleware/errorMiddleware')
const apiRoutes = require('./api');

router.use('/api', apiRoutes)

//Apply the middleware to routes
router.use(errorHandler)


module.exports = router;