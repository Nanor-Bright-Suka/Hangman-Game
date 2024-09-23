import React from 'react'

const Head:JSX.Element = (
  <div  className='w-[50px] h-12 rounded-full border-4 border-black absolute  top-14 -right-5'/>
)
const Body:JSX.Element = (
  <div className='w-[5px] h-24  bg-black absolute top-[100px] right-1'/>
)
const RightArm:JSX.Element = (
  <div className='w-[5px] h-14  bg-black absolute top-[100px] -right-3 rotate-[36deg]'/>
)

const LeftArm:JSX.Element = (
  <div className='w-[5px] h-14  bg-black absolute top-[100px] right-[20px] -rotate-[36deg]'/>
)
const RightArm__Bottom:JSX.Element = (
  <div className='w-[5px] h-14  bg-black absolute bottom-[52px] -right-3 -rotate-[36deg]'/>
)

const LeftArm__Bottom:JSX.Element = (
  <div className='w-[5px] h-14  bg-black absolute bottom-[51px] right-[20px] rotate-[36deg]'/>
)

const BodyParts = [Head, Body, RightArm, LeftArm, RightArm__Bottom, LeftArm__Bottom]


type HangmanProps = {
  numberOfGuesses: number
}

function HangmanDrawing({numberOfGuesses}: HangmanProps) {
  return (
    <div 
    className='relative mt-4'>
     {BodyParts.slice(0, numberOfGuesses).map((part, index) => (
    <div key={index}>{part}</div>))}
      <div className='absolute left-0 right-0 bg-black w-1 h-14 ml-[245px]'/>  
      <div className='w-32 bg-black h-1 ml-[120px]' />   
      <div className='w-1 bg-black h-72 ml-[120px]' /> 
      <div className='w-[250px] bg-black h-1' /> 
     
    </div>
  )
}

export default HangmanDrawing
