type OscarProps = {
    children : React.ReactNode
}

const Oscar = (props : OscarProps) => {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Oscar