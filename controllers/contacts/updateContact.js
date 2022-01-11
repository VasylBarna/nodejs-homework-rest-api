const { Contact } = require('../../models')

const updateContact = async (req, res, next) => {
  const _id = req.params.contactId
  const result = await Contact.findByIdAndUpdate(_id, req.body, { new: true })
  if (!result) {
    res.status(404).json(`Contact with id=${_id} not found`)
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'contact updated',
    data: { result },
  })
}

module.exports = updateContact
