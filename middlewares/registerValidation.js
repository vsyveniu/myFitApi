const { registerValidation } = require("../validation/register");

module.exports = function registerValidate(req, res, next) {
  const validation = registerValidation(req.body);

  if (validation.hasOwnProperty("error")) {
    res.status(400).send(validation.error.details[0].message);
  } else {
    next();
  }
};
