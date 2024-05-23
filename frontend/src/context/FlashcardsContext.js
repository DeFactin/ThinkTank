import { createContext, useReducer } from 'react'

export const FlashcardsContext = createContext()

export const flashcardsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FLASHCARDS':
      return {
        flashcards: action.payload
      }
    case 'CREATE_FLASHCARD':
      return {
        flashcards: [action.payload, ...state.flashcards]
      }
    case 'DELETE_FLASHCARD':
      return {
        flashcards: state.flashcards.filter(f => f._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const FlashcardsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flashcardsReducer, {
    flashcards: null
  })

  return (
    <FlashcardsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FlashcardsContext.Provider>
  )
}