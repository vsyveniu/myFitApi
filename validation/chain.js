const Joi = require('@hapi/joi');

const chainValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string(),
        set: Joi.array().required().items({ daily_id: Joi.number().required()}),
    });

    return schema.validate(data);
};

module.exports.chainValidation = chainValidation;
