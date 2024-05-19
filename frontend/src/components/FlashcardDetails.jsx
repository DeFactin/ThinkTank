import React, { useState } from 'react';
import '../FlashcardStyle.css';

const FlashcardDetails = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'is-flipped' : ''} flashPage`} onClick={handleClick}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h4>{flashcard.title}</h4>
                    <p><strong>Question: </strong>{flashcard.question}</p>
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
