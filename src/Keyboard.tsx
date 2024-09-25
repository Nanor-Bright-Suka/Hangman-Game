
import {UppercaseAlphabet} from "../src/Keys"

type KeyboarProp = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letters:string) => void
  disabled? :  boolean
}


function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboarProp) {
 
  return (
    <div  className='grid grid-cols-16 gap-2  '>
    {
      
      UppercaseAlphabet.map((item) => {
        const IsActive = activeLetters.includes(item)
      const IsInactive = inactiveLetters.includes(item)
        return (
        <button key={item}
        className={`btn  ${IsActive ? "active" : ""} ${IsInactive ? "inactive" : ""}`}
        onClick={() => addGuessedLetter(item)}
        disabled={IsActive || IsInactive || disabled}>
        {item}
        </button>
      )
        
      })
    }
    </div>
  )
}

export default Keyboard
