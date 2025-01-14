const express = require('express')
const jwt = require('jsonwebtoken');
const { hash, compare } = require("bcryptjs");
let User = require('../model/User');

const router = express.Router()

const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../utils/tokens");

router.get('/',(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/register',async (req, res) => {
  try {
    const { username, password,email } = req.body;
    // 1. check if user already exists
    const user = await User.findOne({ username: username });

    // if user exists already, return error
    if (user)
      return res.status(500).json({
        message: "User already exists! Try logging in. 😄",
        type: "warning",
      });
    // 2. if user doesn't exist, create a new user
    // hashing the password
    const passwordHash = await hash(password, 10);
    const newUser = new User({
      username: username,
      password: passwordHash,
      email: email
    });
    // 3. save the user to the database
    await newUser.save();
    // 4. send the response
    res.status(200).json({
      message: "User created successfully! 🥳",
      type: "success",
    });
  } catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error creating user!",
      error,
    });
  }
});

router.post("/logout", (req, res) => {
  // clear cookies
  res.clearCookie("refreshtoken");
  return res.json({
    message: "Logged out successfully! 🤗",
    type: "success",
  });
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // 1. check if user exists
    const user = await User.findOne({ username: username });

    // if user doesn't exist, return error
    if (!user)
      return res.status(500).json({
        message: "User doesn't exist! 😢",
        type: "error",
      });
    // 2. if user exists, check if password is correct
    const isMatch = await compare(password, user.password);

    // if password is incorrect, return error
    if (!isMatch)
      return res.status(500).json({
        message: "Password is incorrect! ⚠️",
        type: "error",
      });

    // 3. if password is correct, create the tokens
    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    // 4. put refresh token in database
    user.refreshtoken = refreshToken;
    await user.save();

    // 5. send the response
    sendRefreshToken(res, refreshToken);
    sendAccessToken(req, res, accessToken);
  } catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error signing in!",
      error,
    });
  }
  });

  router.post("/refresh_token", async (req, res) => {
    try {
      const { refreshtoken } = req.cookies;
      // if we don't have a refresh token, return error
      if (!refreshtoken)
        return res.status(500).json({
          message: "No refresh token! 🤔",
          type: "error",
        });
      // if we have a refresh token, you have to verify it
      let id;
      try {
        id = verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET).id;
      } catch (error) {
        return res.status(500).json({
          message: "Invalid refresh token! 🤔",
          type: "error",
        });
      }
      // if the refresh token is invalid, return error
      if (!id)
        return res.status(500).json({
          message: "Invalid refresh token! 🤔",
          type: "error",
        });
      // if the refresh token is valid, check if the user exists
      const user = await User.findById(id);
      // if the user doesn't exist, return error
      if (!user)
        return res.status(500).json({
          message: "User doesn't exist! 😢",
          type: "error",
        });
      // if the user exists, check if the refresh token is correct. return error if it is incorrect.
      if (user.refreshtoken !== refreshtoken)
        return res.status(500).json({
          message: "Invalid refresh token! 🤔",
          type: "error",
        });
      // if the refresh token is correct, create the new tokens
      const accessToken = createAccessToken(user._id);
      const refreshToken = createRefreshToken(user._id);
      // update the refresh token in the database
      user.refreshtoken = refreshToken;
      // send the new tokes as response
      sendRefreshToken(res, refreshToken);
      return res.json({
        message: "Refreshed successfully! 🤗",
        type: "success",
        accessToken,
      });
    } catch (error) {
      res.status(500).json({
        type: "error",
        message: "Error refreshing token!",
        error,
      });
    }
  });

module.exports = router;