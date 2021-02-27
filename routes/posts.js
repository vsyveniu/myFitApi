const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "first ddfdfhdf FUCKi SUCK RACK dsgds dfh",
    },
  });
});

module.exports = router;
