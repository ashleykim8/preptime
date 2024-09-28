const express = require('express')
let Flashcards = require('../model/Flashcards');

const router = express.Router()

router.get('/',(req, res) => {
  Flashcards.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Add flashcard to database, see login page for how to call this endpoint
//call to endpoint looks like http://localhost:5000/api/flashcards/register
router.post('/register',async (req, res) => {
  const id = await Flashcards.countDocuments()
  const {definitions,name} = req.body

  try{
    const flashcards = await  Flashcards.create({definitions,id,name})
    res.status(200).json(flashcards)
  } catch(error){
    res.status(400).json({error:error.message})
  }

  
});
//find a flashcard set based off it's id the id must be in the query param,
//so call to endpoint looks like http://localhost:5000/api/flashcards/find?id=0
router.get('/find', async (req, res) => {
  const id = req.query.id
    
    Flashcards.findOne({id:id})
      .then((Flashcards)=>{
        return (res.status(200).json(Flashcards));
      })
      .catch((err)=>{
        return (res.status(400).json(err));
    })
  });


module.exports = router;