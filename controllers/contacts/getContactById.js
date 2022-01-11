const { Contact } = require('../../models')

const getContactById = async (req, res) => {
  const id = req.params.contactId
  const result = await Contact.findById(id)
  if (!result) {
    res.status(404).json(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'succes',
    code: 200,
    data: { result },
  })
}

module.exports = getContactById
