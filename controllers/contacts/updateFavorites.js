const { Contact } = require('../../models')

const updateFavorites = async (req, res, next) => {
  const _id = req.params.contactId
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(
    _id,
    { favorite },
    { new: true }
  )
  if (!result) {
    res.status(400).json(`Contact with id=${_id} missing field favorite`)
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'contact updated',
    data: { result },
  })
}

module.exports = updateFavorites
