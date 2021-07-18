const Routes = require('./index')
const express = require('express')

const router = express.Router()

router.use('/', Routes.User)
router.use('/admin', Routes.Admin) 

module.exports = router