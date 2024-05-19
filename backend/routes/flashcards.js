const express = require ('express')
const {
    createFlashcard,
    getFlashcard,
    getFlashcards,
    deleteFlashcard,
    updateFlashcard
} = require('../controllers/flashcardsController')
const router = express.Router()


//to get all flashcards
router.get('/',getFlashcards)

//to get a single flashcard
router.get('/:id',getFlashcard)

//to post a new flashcard
router.post('/', createFlashcard)
  

//to delete a flashcard
router.delete('/:id',deleteFlashcard)

//to update a flashcard
router.patch('/:id',updateFlashcard)


module.exports = router