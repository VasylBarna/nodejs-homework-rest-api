const { Contact } = require('../../models')

const removeContact = async (req, res, next) => {
  const _id = req.params.contactId
  const result = await Contact.findByIdAndRemove(_id)
  if (!result) {
    res.status(404).json(`Contact with id=${_id} not found`)
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'contact deleted',
    data: { result },
  })
}

module.exports = removeContact
