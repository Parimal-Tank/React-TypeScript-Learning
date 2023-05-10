import React from 'react'

type InputProps = {
    value : string
   handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * This is a TypeScript React component that renders an input element and logs the event object when
 * the input value changes.
 * @param {InputProps} props - props is an object that contains the properties passed to the Input
 * component. These properties can include the value of the input, any additional attributes for the
 * input element, and any event handlers that need to be attached to the input element.
 */

const Input = ({ value , handleChange } : InputProps) => {

    const handleInputChange = (event : React.ChangeEvent<HTMLElement>) => {
         console.log(event);
    }

  return (
     <input type='text' value={value} onChange={handleChange} />
  )
}

export default Input