import { useEffect, useState } from "react"
import FlashcardDetails from "../components/FlashcardDetails"
import '../FlashcardStyle.css';

const Flashcards = () => {

    const [flashcards, setFlashcards] = useState(null)

    useEffect(() => {
        const fetchFlashcards = async () => {
            const response = await fetch('/api/flashcards')
            const json = await response.json()

            if (response.ok) {
                setFlashcards(json)
            }
        }

        fetchFlashcards()
    }, [])

    return (
        <div className="flashPage">
            <div className="flashcards">
                {flashcards && flashcards.map(flashcard => (
                    <FlashcardDetails flashcard={flashcard} key={flashcard._id} />
                ))}
            </div>
        </div>
    )
}

export default Flashcards