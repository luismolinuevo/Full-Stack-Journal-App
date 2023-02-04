const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req,res) => {
    const { name, email, password } = req.body;
    console.log("POST body: ", req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const User = new user({ name, email, password: hashedPassword });
    try {
      const newuser = await User.save();
      newuser.password = undefined;
      res.status(201).json(newuser)
    } catch(err) {
      res.status(400).json({ msg: "Failed Signup", err });
    }

})

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email });
  console.log(User);
  if (!User) {
    console.log("no user found")
    return res.status(401).send("Invalid email or password");
  }
  const valid = await bcrypt.compare(password, User.password);
  if (!valid) {
    console.log("error")
    return res.status(401).send("Invalid email or password");
  }
  req.session.user = User;  //uncommenting this fixed the error I had with adding entries.(This opens a session if the data of the user that logged in)
  // req.session.userId = User._id
  res.status(200).json(User);   //send the data and status. Have to send status cause in front end we are checking if we are status 200
});

router.get("/login", (req, res) => {
  if (req.session.user) {   //putting this fixed it
    res.json(req.session.user);
    console.log(req.session.user);
  } else {
    res.sendStatus(401);
  }

  // if(req.session.user && req.session.user.email)
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