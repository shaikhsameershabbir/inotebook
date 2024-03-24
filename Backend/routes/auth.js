const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// create user using POST "api/auth/createuser" no Login require
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("emai").isEmpty(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If error then return bad request with error
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    try {
      // Check whether user exist or not in db
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ email: "Email Already exists Please Log in !" });
      }
      // Create user with bycrupt js for password hashing
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      })
        .then((user) => res.json(user))
        .catch((error) => {
          console.log(error);
          res.json({ emai: "Email not Availabale !" });
        });
    } catch (error) {
      // error catch
      console.log(error);
      res.status(500).json("Something went wrong !");
    }
  }
);

// Authenticate  user using POST "api/auth/login" no Login require
router.post(
  "/login",

  async (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    // If error then return bad request with error
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    // Check whether user exist or not in db
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ email: "Email Already exists Please Log in !" });
    }

    //  compair password
    const hashedPasswordFromDB = user.password;

    // Compare the plaintext password with the hashed password
    const comparedPassword = await bcrypt.compare(
      password,
      hashedPasswordFromDB
    );

    if (!comparedPassword) {
      return res.status(400).json({ email: "Invalid username or password !" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const AuthToken = jwt.sign(data, "smasher");
    res.json({ AuthToken });
  }
);

module.exports = router;
