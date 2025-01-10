const router = require('express').Router()

const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authenticaton')
const errorHandler = require('../middlewares/errorHandler')
const employee = require('./employee')
const family = require('./family')

router.post("/login", UserController.postLogin)

router.use(authentication)
router.use("/employee", employee)
router.use("/family", family)


router.use(errorHandler)
module.exports = router