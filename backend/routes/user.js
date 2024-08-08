const express = require('express')
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
    const user = await  User.create({username,password,email})
    res.status(200).json(user)
  } catch(error){
    res.status(400).json({error:error.message})
  }

  
});

module.exports = router;