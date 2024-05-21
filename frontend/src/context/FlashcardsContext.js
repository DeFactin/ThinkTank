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
      { children }
    </FlashcardsContext.Provider>
  )
}