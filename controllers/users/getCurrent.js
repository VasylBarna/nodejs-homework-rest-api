const { User } = require('../../models')

const getCurrent = async (req, res) => {
  const { _id, avatarURL, email, subscription } = req.user
  await User.findById(_id)
  res.json({
    status: 'succes',
    code: 200,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
      },
    },
  })
}

module.exports = getCurrent
