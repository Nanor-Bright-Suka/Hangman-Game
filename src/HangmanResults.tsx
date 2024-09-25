

type HangResultsProps = {
  wordToGuess: string
  guessedLett: string[]
  reveal?: boolean
}

function HangmanResults({guessedLett, wordToGuess,reveal}: HangResultsProps) {
  return (
    <div className='flex gap-3 text-6xl uppercase'>
      {wordToGuess.split("").map((letter, index) => (
         <span className='border-b-4 border-b-black' key={index}>
        <span 
    className={`${guessedLett.includes(letter) || reveal ? "visible" : "invisible"} 
    ${!guessedLett.includes(letter) && reveal ? "text-red-600" : "text-black"}`}>
          {letter}
          </span> 
          </span>
      ))}
    </div>
  )
}

export default HangmanResults
 