import React from 'react'
import Greet from '../Greet'

// We can use a Another Component Props to current Component
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
       {props.name}
    </div>
  )
}

export default CustomComponent
