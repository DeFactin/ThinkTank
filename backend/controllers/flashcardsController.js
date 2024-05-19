const Flashcards = require('../models/flashcardsModel')
const mongoose = require('mongoose')

//get all flashcards
const getFlashcards = async (req, res) => {
    const flashcards = await Flashcards.find({}).sort({ createdAt: -1 })

    res.status(200).json(flashcards)
}

//get a single flashcard
const getFlashcard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such flashcard' })
    }

    const flashcard = await Flashcards.findById(id)

    if (!flashcard) {
        return res.status(404).json({ error: 'No such flashcard' })
    }

    res.status(200).json(flashcard)
}


//create a new flashcard
const createFlashcard = async (req, res) => {
    const { title, question, answer } = req.body

    //add to the database
    try {
        const flashcard = await Flashcards.create({ title, question, answer })
        res.status(200).json(flashcard)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a flashcard
const deleteFlashcard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such flashcard' })
    }

    const flashcard = await Flashcards.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: 'No such flashcard' })
    }

    res.status(200).json(flashcard)
}

//update a flashcard
const updateFlashcard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such flashcard' })
    }

    const flashcard = await Flashcards.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!flashcard) {
        return res.status(400).json({ error: 'No such flashcard' })
    }

    res.status(200).json(flashcard)
}


module.exports = {
    createFlashcard,
    getFlashcard,
    getFlashcards,
    deleteFlashcard,
    updateFlashcard
}