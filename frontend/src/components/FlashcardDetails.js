const FlashcardDetails = ({ flashcard }) => {

    return (
      <div className="flashcard-details">
        <h4>{flashcard.title}</h4>
        <p><strong>Question: </strong>{flashcard.question}</p>
        <p><strong>Answer: </strong>{flashcard.answer}</p>
      </div>
    )
  }
  
  export default FlashcardDetails