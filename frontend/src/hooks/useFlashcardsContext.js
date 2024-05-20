import { FlashcardsContext } from "../context/FlashcardsContext"
import { useContext } from "react"

export const useFlashcardsContext = () => {
  const context = useContext(FlashcardsContext)

  if(!context) {
    throw Error('useFlashcardsContext must be used inside an FlashcardsContextProvider')
  }

  return context
}