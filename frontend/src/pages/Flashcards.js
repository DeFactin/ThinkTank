import { useEffect, useState } from "react";
import FlashcardDetails from "../components/FlashcardDetails";
import '../FlashcardStyle.css';
import '../index.css';
import FlashcardForm from "../components/FlashcardForm";
import { useFlashcardsContext } from "../hooks/useFlashcardsContext";

const Flashcards = () => {
    const { flashcards, dispatch } = useFlashcardsContext();
    const [selectedTitle, setSelectedTitle] = useState('Physics'); // Default category

    useEffect(() => {
        const fetchFlashcards = async () => {
            const response = await fetch('/api/flashcards');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_FLASHCARDS', payload: json });
            }
        };

        fetchFlashcards();
    }, [dispatch]);

    const handleCategoryClick = (category) => {
        setSelectedTitle(category);
        document.querySelector('.flashPage').scrollIntoView({ behavior: 'smooth' });
    };


    const filteredFlashcards = flashcards ?
        (selectedTitle ? flashcards.filter(flashcard => flashcard.title === selectedTitle) : flashcards)
        : [];

    return (
        <div>
            <div>
                <FlashcardForm />
            </div>

            <div className="buttonsFlash">
                <button onClick={() => handleCategoryClick('Math')}><h2>Math</h2></button>
                <button onClick={() => handleCategoryClick('Physics')}><h2>Physics</h2></button>
                <button onClick={() => handleCategoryClick('Literature')}><h2>Literature</h2></button>
                <button onClick={() => handleCategoryClick('History')}><h2>History</h2></button>
                <button onClick={() => handleCategoryClick('')}><h2>All Cards</h2></button>
            </div>
            <div className="flashPage">
                <div className="flashcards">
                    {flashcards === null ? (
                        <div>Loading...</div>
                    ) : (
                        filteredFlashcards.length > 0 ? (
                            filteredFlashcards.map(flashcard => (
                                <FlashcardDetails flashcard={flashcard} key={flashcard._id} />
                            ))
                        ) : (
                            <div>No flashcards available for this category.</div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Flashcards;
