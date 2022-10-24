const Joi = require('joi')

const putInSchema = Joi.object({
    nickname : Joi.string().min(3).max(32).required(),
    name : Joi.string().min(1).required(),
    lastName : Joi.string().min(1).required(),
    age : Joi.number().min(16),
    email : Joi.string().email().required()
});

const updateInSchema = Joi.object({
    nickname : Joi.string().min(3).max(32),
    name : Joi.string().min(1),
    lastName : Joi.string().min(1),
    age : Joi.number().min(16),
    email : Joi.string().email()
});

module.exports = {
    putInSchema,
    updateInSchema
}