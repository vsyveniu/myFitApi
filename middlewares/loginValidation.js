const { loginValidation } = require("../validation/login");

module.exports = function loginValidate(req, res, next) {
  const validation = loginValidation(req.body);

  if (validation.hasOwnProperty("error")) {
    res.status(400).send(validation.error.details[0].message);
  } else {
    next();
  }
};
