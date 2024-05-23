import React, { useState } from 'react';
import '../FlashcardStyle.css';
import { useFlashcardsContext } from '../hooks/useFlashcardsContext'

const FlashcardDetails = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    const { dispatch } = useFlashcardsContext()

    const handleDelete = async () => {
        const response = await fetch('/api/flashcards/' + flashcard._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_FLASHCARD', payload: json })
        }
    }


    return (
        <div className={`flashcard ${isFlipped ? 'is-flipped' : ''} flashPage`} onClick={handleClick}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h4>{flashcard.title}</h4>
                    <p><strong>Question: </strong>{flashcard.question}</p>
                    <span className="icon-container" onClick={handleDelete}>
                        <span>
                            <img
                            class ="trashCan" 
                            src="../3807871.png"
                            alt="Delete"
                            width={25} />
                        </span>
                    </span>
                </div>
                <div className="flashcard-back">
                    <h4>{flashcard.title}</h4>
                    <p><strong>Answer: </strong>{flashcard.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FlashcardDetails;
