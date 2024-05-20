import { useEffect } from "react"
import FlashcardDetails from "../components/FlashcardDetails"
import '../FlashcardStyle.css';
import FlashcardForm from "../components/FlashcardForm"
import { useFlashcardsContext } from "../hooks/useFlashcardsContext"


const Flashcards = () => {

    const { flashcards, dispatch } = useFlashcardsContext()

    useEffect(() => {
        const fetchFlascards = async () => {
            const response = await fetch('/api/flashcards')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_FLASHCARDS', payload: json })
            }
        }

        fetchFlascards()
    }, [dispatch])

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
            </div>
        </div>
    )
}

export default Flashcards