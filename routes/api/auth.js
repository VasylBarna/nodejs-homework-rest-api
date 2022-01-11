const express = require('express')

const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiUserSchema } = require('../../models/user')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), ctrlWrapper(ctrl.signup))
router.post('/login', validation(joiUserSchema), ctrlWrapper(ctrl.login))
router.post('/logout', auth, ctrlWrapper(ctrl.logout))

module.exports = router
