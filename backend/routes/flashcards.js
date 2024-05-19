const express = require ('express')
const Flashcards = require('../models/flashcardsModel')

const router = express.Router()


//to get all flashcards
router.get('/',(req,res)=>{
    res.json({mssg:'GET all Flashcards'})
})

//to get a single flashcard
router.get('/:id',(res,req)=>{
    res.json({mssg: 'GET a single flashcard'})
})

//to post a new flashcard
router.post('/', async (req, res) => {
    const {title, question, answer} = req.body
    
    try {
      const flashcard = await Flashcards.create({title, question, answer})
      res.status(200).json(flashcard)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })
  

//to delete a flashcard
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'DELETE a flashcard'})
})

//to update a flashcard
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'UPDATE a flashcard'})
})


module.exports = router

