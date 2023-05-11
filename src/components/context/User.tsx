import React , { useContext} from 'react'
import { UserContext } from './UserContext';

// Example of useContext Hook

const User = () => {

    const userContext = useContext(UserContext);
    
    const handleLogin = () => {
        userContext?.setUser({
            name: 'Parimal',
            email: 'parimal@tank.com'
        })
    };
    const handleLogout = () => {
        userContext?.setUser(null);
    };

  return (
    <div>
       <button onClick={handleLogin} >Login</button>
       <button onClick={handleLogout}>Logout</button>
       <div>User name is {userContext?.user?.name}</div>
       <div>User email is {userContext?.user?.email}</div>
    </div>
  ) 
}

export default User