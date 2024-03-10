"use client"
import { TypeAnimation } from 'react-type-animation'

const ExampleComponent = () => {
  return (
    <TypeAnimation
    sequence={[
      'Geoffrey',
      1000,
      'A UNSW Student',
      1000, 
      'Studying CS Comm',
      1000,
    ]}
    wrapper="span"
    speed={25}
    repeat = {Infinity}
    /> 
  )

}

export default ExampleComponent