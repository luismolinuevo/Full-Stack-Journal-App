const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req,res) => {
    const { name, email, password } = req.body;
    console.log("POST body: ", req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    // await user.create({
    //     name: name,
    //     email: email,
    //     password: hashedPassword,
    // })
    const User = new user({ name, email, password: hashedPassword });
    await User.save()
    .then((user) => {
        user.password = undefined;
        // req.login(user, () => res.status(201).json(user));
      })
      .catch((err) => {
        res.status(400).json({ msg: "Failed Signup", err });
      });
})


// router.post("/login", passport.authenticate("local"), (req, res) => {
//   res.json(req.user);
// });

// router.get("/login", (req, res) => {
//   if (req.user) {   
//     res.json(req.user);
//   } else {
//     res.sendStatus(401);
//   }
// });

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email });
  if (!user) return res.status(400).send("Invalid email or password");
  const valid = await bcrypt.compare(password, User.password);
  if (!valid) return res.status(400).send("Invalid email or password");
  req.session.user = User;  //uncommenting this fixed the error I had with adding entries.(This opens a session if the data of the user that logged in)
  // req.session.userId = User._id
  res.send("Logged In");
});


router.post("/logout", async (req, res) => {
    try {
      await req.session.destroy();
      return res.sendStatus(200);
  } catch (e) {
      console.error(e);
      return res.sendStatus(500);
  }
});

module.exports = router;