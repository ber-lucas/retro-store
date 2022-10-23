import axios from 'axios';
import { createContext, useState } from 'react'
import CreateModalLogin from '../components/CreateModalLogin';

type SignInData = {
    email: string;
    password: string;
}

type LoginContextType = {
    user: string
    signIn: (data:SignInData) => Promise<void>
}

export const LoginContext = createContext({} as LoginContextType)

export function LoginProvider(props:any) {
    const [user, setUser] = useState('')
    
    async function signIn({email, password}:SignInData) {
        await axios(`http://localhost:3333/user/${email}-${password}/login`)
            .then(response => response.data)
            .then(response => response[0])
            .then(response => setUser(response.id))
    }
    
    return (
        <LoginContext.Provider value={{ signIn, user }}>
            {props.children}
        </LoginContext.Provider>
    )
}