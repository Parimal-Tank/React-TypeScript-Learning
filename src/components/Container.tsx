type ContainerProps = {
     style :  React.CSSProperties
}


const Container = (props : ContainerProps) => {
  return (
    <div style={{ border: '1px solid black' , padding  : '1rem' , background: 'yellow' }}>
          Text Content Goes Here
    </div>
  )
}

export default Container