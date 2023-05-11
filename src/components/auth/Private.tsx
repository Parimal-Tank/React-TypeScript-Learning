import React from 'react'
import {ProfileProps} from './Profile'
import Login from './Login'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

const Private = ({ isLoggedIn , component : Component } : PrivateProps) => {

    if(isLoggedIn){
        return <Component name='Parimal' />
    } else{
        return <Login />
    }

}
 
export default Private
