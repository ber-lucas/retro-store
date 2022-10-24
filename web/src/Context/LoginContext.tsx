import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

type SignInData = {
    email: string;
    password: string;
}

type UserType = {
    name: string,
    birthday: string,
    balance: number,
    userGitHub: string,

    _count: {
        games: number
    }
}

type LoginContextType = {
    auth: string | null
    user: UserType | undefined
    isAuthenticated: boolean
    signIn: (data:SignInData) => Promise<string | undefined | null>
}


export const LoginContext = createContext({} as LoginContextType)

export function LoginProvider(props:any) {
    const [auth, setAuth] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState<UserType | undefined>(undefined)
    
    const isAuthenticated = !!auth
    
    async function signIn({email, password}:SignInData) {
        try {
            await axios(`http://localhost:3333/user/${email}-${password}/login`)
                .then(response => response.data)
                .then(response => response[0])
                .then(response => {
                    setAuth(response.id)
                    
                    localStorage.setItem('user', JSON.stringify(response))

                    return response.id
                })
                .then(response => localStorage.setItem('token', response))
            
            alert('Logado com sucesso.')

            return localStorage.getItem('token')
        } catch (error) {
            alert('Erro ao fazer login.')
        }     
    }

    useEffect(() => {
        setAuth(localStorage.getItem('token'))
        setUser(JSON.parse(String(localStorage.getItem('user'))))
    }, [auth])

    return (
        <LoginContext.Provider value={{ signIn, auth, isAuthenticated, user }}>
            {props.children}
        </LoginContext.Provider>
    )   
}