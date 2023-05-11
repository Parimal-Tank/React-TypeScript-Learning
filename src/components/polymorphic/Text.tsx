import React, { Children } from 'react'

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children : React.ReactNode
    as?: React.ElementType
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &  Omit<React.ComponentProps<E> , keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>({ size , color , children ,as }: TextProps<E>) => {

    const Component = as || 'div';

  return (
    <Component className={`class-with-${size}-${color}`}>
       {Children}
    </Component>
  )
}

export default Text