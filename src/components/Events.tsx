import React from "react"

type EventsProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement> , id: Number) => void
}

const Events = (props : EventsProps) => {
  return (
   <button onClick={(event) => props.handleClick(event , 1)}>Click</button>
  )
}

export default Events
