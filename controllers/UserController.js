const { User } = require("../models/User");

class UserController {
  constructor(req) {
    this.req = req;
  }

  async read() {
    return await User.read();
  }
}

/* const userController = () => ({
  async create(req) {
      console.log(req);
      const user = new User('fuck', 'suck', 'bitch');
      return (await user.save());
  },

}); */

module.exports = { UserController };
