const express = require('express')
const jwt = require('jsonwebtoken');

let User = require('../model/User');

const router = express.Router()

router.get('/',(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/register',async (req, res) => {
  const {username,password,email} = req.body

  try{
    const user = await  User.create({username,password,email,})
    res.status(200).json(user)
  } catch(error){
    res.status(400).json({error:error.message})
  }

  
});

router.post('/login', async (req, res) => {
  const {username,password} = req.body

    User.findOne({username: username, password:password})
      .then((user)=>{
        delete user.password;

        const token = jwt.sign(user.toObject(),process.env.JWT_SECRET_KEY, {expiresIn: "1h"})
        res.cookie("token",token);
        res.send("Cookie Set");
      })
      .catch((err)=>{
        return (res.status(403).json(err));
    })
  });


module.exports = router;