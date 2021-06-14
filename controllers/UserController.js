const { User } = require("../models/User");

class UserController {
  constructor(req) {
    this.req = req;
  }

  async read() {
    return await User.read();
  }
}


module.exports = { UserController };
