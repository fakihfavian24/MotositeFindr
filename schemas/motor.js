const Joi = require('joi');

module.exports.motorSchema = Joi.object({
    motor: Joi.object({
        title: Joi.string().required(),
        licensePlate: Joi.string().required(),
        model: Joi.string().required(),
        description: Joi.string().required(),
        missingDate: Joi.string().required(),
        postDate: Joi.string().required(),
        imageURL: Joi.array().items(Joi.string()).required(),
    }).required(),
});