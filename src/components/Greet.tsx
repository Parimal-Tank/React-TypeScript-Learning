type GeetProps = {
    name : string,
    messageCount? : number,   // Question mark means This is Optional Parameter if we don't give value it won't be throw the error
    isLogin : boolean
}

const Greet = (props : GeetProps) => {

  // if we want to set default value when props not having their value
  const { messageCount = 0 } = props

  return (
    <div>
        {
            props.isLogin ? `welcome  ${props.name}! You have ${messageCount}  unread message` : 'Welcome Guest'
        }
        {/* <h1>Hello {props.name} From the Greet Component</h1> */}
    </div>
  )
}

export default Greet