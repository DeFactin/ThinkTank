import { useState } from 'react'

const FlashcardForm = () => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const flashcard = {title, question, answer}
    
    const response = await fetch('/api/flashcards', {
      method: 'POST',
      body: JSON.stringify(flashcard),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setQuestion('')
      setAnswer('')
      console.log('new flashcard added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New flashcard</h3>

      <label>Flashcard Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Question: </label>
      <input 
        type="text" 
        onChange={(e) => setQuestion(e.target.value)} 
        value={question}
      />

      <label>Number: </label>
      <input 
        type="text" 
        onChange={(e) => setAnswer(e.target.value)} 
        value={answer} 
      />

      <button>Add flashcard</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default FlashcardForm