const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", (req, res) => {
  res.json({
    posts: { title: "first pfdgdfgommmmuuuu" },
  });
});

module.exports = router;
