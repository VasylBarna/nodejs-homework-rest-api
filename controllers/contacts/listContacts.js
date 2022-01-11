const { Contact } = require('../../models')

const listContacts = async (req, res) => {
  const _id = req.user
  const { page = 1, limit = 20, favorite } = req.query
  const skip = (page - 1) * limit
  const contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: Number(limit),
  }).populate('owner', '_id name email')
  const filter = await contacts.filter((contact) => contact.favorite)
  const result = favorite ? filter : contacts
  res.json({
    status: 'succes',
    code: 200,
    data: { result },
  })
}

module.exports = listContacts
