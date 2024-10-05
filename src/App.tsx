import  { useCallback, useEffect, useState } from 'react'
import {words}  from '../src/Words'
import HangmanDrawing from './HangmanDrawing';
import HangmanResults from './HangmanResults';
import Keyboard from './Keyboard';


const getWord = () => {
  return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=> getWord())
   console.log(wordToGuess)
  
  const [guessedLett, setGuessedLett] = useState<string[]>([])
 
  const incorrtLett = guessedLett.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrtLett.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLett.includes(letter))

  
  const addGuessedLetter = useCallback((letter: string)=> {
    if(guessedLett.includes(letter) || isWinner || isLoser) return
  
    setGuessedLett(currentLetters => [...currentLetters, letter])
  },[guessedLett, isLoser, isWinner])

   
  useEffect(() => {
    const handler = (e: KeyboardEvent) =>{
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [addGuessedLetter])

  //Enter Key
  useEffect(() => {
    const handler = (e:KeyboardEvent) =>{
      const key = e.key
      if(key !== "Enter") return
     
      e.preventDefault()
      setGuessedLett([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keydown",handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])


  
  return (
<div className='lg:w-[40%] w-[70%] flex flex-col flex-wrap gap-10 my-0 mx-auto justify-center'>
      {isLoser && (
        <> 
        <div className='text-4xl text-red-600 uppercase'>You Loose - Try Again </div>
        
        </>
        ) }
      {isWinner && (
        <> 
        <div className='text-4xl text-red-600 uppercase'>
        You Wonn !! - Play Again
      </div>
      </>)}
      <div className='flex flex-col justify-between items-center mx-auto mt-[30%]'>  
      <HangmanDrawing numberOfGuesses={incorrtLett.length} />
      <HangmanResults guessedLett={guessedLett} wordToGuess={wordToGuess} reveal={isLoser}/>
      <div className="self-stretch mt-[10%]">  
      <Keyboard 
      disabled={isLoser || isLoser}
      activeLetters = {guessedLett.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters = {incorrtLett}
      addGuessedLetter = {addGuessedLetter}
      />
      </div>
      </div>
</div>
  )
}

export default App
