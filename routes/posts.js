const router = require("express").Router();
const verify = require("./verifyToken");
const { UserController } = require("../controllers/UserController");
const { User } = require("../models/User");

router.get("/", async (req, res) => {
  const userCRUD = new UserController(req);

  userCRUD.read(req).then((result) => res.json(result));

  //user.save().then((result) => res.json(result));
});

module.exports = router;
