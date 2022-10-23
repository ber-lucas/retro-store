import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

type SignInData = {
    email: string;
    password: string;
}

type LoginContextType = {
    user: string
    signIn: (data:SignInData) => Promise<string | undefined | null>
}

export const LoginContext = createContext({} as LoginContextType)

export function LoginProvider(props:any) {
    const [user, setUser] = useState('')
    
    async function signIn({email, password}:SignInData) {

        try {
            await axios(`http://localhost:3333/user/${email}-${password}/login`)
                .then(response => response.data)
                .then(response => response[0])
                .then(response => {
                    setUser(response.id)
                    return response.id
                })
                .then(response => localStorage.setItem('token', response))
            
            alert('Logado com sucesso.')

            return localStorage.getItem('token')
        } catch (error) {
            alert('Erro ao fazer login.')
        }
        
    }
    
    return (
        <LoginContext.Provider value={{ signIn, user }}>
            {props.children}
        </LoginContext.Provider>
    )   
}