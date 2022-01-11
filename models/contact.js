const { Schema, model } = require('mongoose')
const Joi = require('joi')

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
)

const joiSchema = Joi.object({
  name: Joi.string().trim().min(3).max(40).required(),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.bool(),
})

const favoritesJoiSchema = Joi.object({
  favorite: Joi.bool().valid(true, false).required(),
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema,
  favoritesJoiSchema,
}
