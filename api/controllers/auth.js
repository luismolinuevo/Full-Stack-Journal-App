const router = require("express").Router();
const passport = require("../middleware/passport-config");
const user = require("../models/user");

router.post("/signup", async (req,res) => {
    console.log("POST body: ", req.body);
    await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    .then((user) => {
        user.password = undefined;
        req.login(user, () => res.status(201).json(user));
      })
      .catch((err) => {
        res.status(400).json({ msg: "Failed Signup", err });
      });
})

router.post("login", passport.authenticate("local"), async (req,res) => {

    res.json(req.user);
  });
  
  router.get("/login", (req, res) => {
    if (req.user) {
      res.json(req.user);
    } else {
      res.sendStatus(401);
    }
  });

module.exports = router;

router.post("/logout", async (req, res) => {
    try {
      await req.session.destroy();
      return res.sendStatus(200);
  } catch (e) {
      console.error(e);
      return res.sendStatus(500);
  }
});