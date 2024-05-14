const express = require ('express')

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
router.post('/',(req,res)=>{
    res.json({mssg: 'POST a new flashcard'})
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

