// type RandomNumberProps = { 
//      value : number 
//      isPostive  ?: boolean
//      isNegative ?: boolean
//      isZero ?: boolean 
// }

// This is Example of Restricted Props
type RandomNumberType = { 
     value : number
}

type PositiveNumber = RandomNumberType & {
     isPositive : boolean
     isNegative? : boolean
     isZero? : never
}

type NegativeNumber = RandomNumberType & {
    isNegative : boolean
    isPositive? : never
    isZero? : never
}

type Zero = RandomNumberType & {
    isZero : boolean
    isPositive ?: never
    isNegative ?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({ value, isPositive  , isNegative , isZero}: RandomNumberProps) => {
     return(
        <div>
             {value} {isPositive && 'positive'}
             {isNegative && 'negative'}
             {isZero && 'zero'}
        </div>
     )
}