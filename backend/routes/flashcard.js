const express = require('express')
let Flashcard = require('../model/Flashcard');

const router = express.Router()

router.get('/',(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/register',async (req, res) => {
  const {definitions,id} = req.body

  try{
    const flashcard = await  Flashcard.create({definitions,id})
    res.status(200).json(flashcard)
  } catch(error){
    res.status(400).json({error:error.message})
  }

  
});

router.get('/find', async (req, res) => {
  //get from query find?flashcardId=number
  const id = req.query.flashcardId

    Flashcard.findOne({id:id})
      .then((flashcard)=>{
        return (res.status(200).json(flashcard));
      })
      .catch((err)=>{
        return (res.status(400).json(err));
    })
  });


module.exports = router;