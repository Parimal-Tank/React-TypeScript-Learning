type StatusProps = {
    status : string  // also we can define specific types of status   'loading' || 'success' || 'error'
}

const Status = ( props : StatusProps ) => {

    let message;

    if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status === 'success'){
        message = 'Data Fetch Successfully'
    }else if(props.status === 'error'){
        message = 'Error Fetching Data'
    }

  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status
