const express = require('express')
const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, favoritesJoiSchema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', auth, ctrlWrapper(ctrl.listContacts))
router.get('/:contactId', ctrlWrapper(ctrl.getContactById))
router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.addContact))
router.put(
  '/:contactId',
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContact)
)

router.patch(
  '/:contactId/favorite',
  validation(favoritesJoiSchema),
  ctrlWrapper(ctrl.updateFavorites)
)
router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

module.exports = router
