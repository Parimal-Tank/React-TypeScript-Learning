import React, { useState } from 'react'

const User = () => {

  type AuthUser = {
      name : string
      email : string
  }

//  const [ user , setUser ] = useState<AuthUser | null>(null);  

 // To avoid Null used Type Assertion 
 const [ user , setUser ] = useState<AuthUser>({} as AuthUser);  


  const handleLogin = () => {
    setUser({
       name : 'Parimal',
       email : 'Parimal@gmail.com'
    })
  }

  // const handleLogout = () => {
  //   setUser(null);
  // }

  return (
    <div>
       <button onClick={handleLogin} >Login</button>
       {/* <button onClick={handleLogout}>Logout</button> */}

       {/* if we assgin the initial value as null that why we require null safety operator  */}
       <div>User Name is : {user?.name}</div>    
       <div>User Email is : {user?.email}</div>
    </div>
  )
}

export default User
