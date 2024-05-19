import { useEffect, useState } from "react"
import FlashcardDetails from "../components/FlashcardDetails"
import '../FlashcardStyle.css';
import FlashcardForm from "../components/FlashcardForm"

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
        <div>
            <div>
                <FlashcardForm />
            </div>
            <div className="flashPage">
                <div className="flashcards">
                    {flashcards && flashcards.map(flashcard => (
                        <FlashcardDetails flashcard={flashcard} key={flashcard._id} />
                    ))}
                </div>
            </div></div>
    )
}

export default Flashcards