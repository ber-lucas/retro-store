import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

type SignInData = {
    email: string;
    password: string;
    name: string,
    userGitHub: string,
    birthday: string
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

type BalanceType = {
    balance: number
}

type UpdateProfileType = {
    name: string,
    birthday: string,
    userGitHub: string
}

type LoginContextType = {
    auth: string | null
    user: UserType | undefined
    balance: BalanceType | null | number
    isAuthenticated: boolean
    signIn: (data:SignInData) => Promise<string | undefined | null>
    registering: (data:SignInData) => Promise<string| void | undefined | null>
    addBalance: (data:BalanceType) => Promise<void>
    updateProfile: (data:SignInData) => Promise<void>
}


export const LoginContext = createContext({} as LoginContextType)

export function LoginProvider(props:any) {
    const [auth, setAuth] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState<UserType | undefined>(undefined)
    const [balance, setBalance] = useState<BalanceType | number | null>(Number(localStorage.getItem('balance')))
    
    const isAuthenticated = !!auth

    async function updateProfile({email, password, name, birthday, userGitHub}:SignInData) {
        try {
            await axios.post(`http://localhost:3333/user/${auth}/data/update`, {
                email,
                password,
                name,
                birthday,
                userGitHub,
            })
                .then(response => response.data)
                .then(response => {
                    setUser(response)
                    setBalance(response.balance)

                    localStorage.setItem('balance', response.balance)
                    localStorage.setItem('user', JSON.stringify(response))

                    return location.reload()
                })
            
            alert('Dados atualizados com sucesso!')
        } catch (error) {
            alert('Erro ao tentar atualizar os dados.')
        }
    }

    async function addBalance({balance}:BalanceType) {
        console.log(balance)
        await axios.post(`http://localhost:3333/user/${auth}/balance`, {
            balance: Number(balance)
        })
            .then(response => response.data)
            .then(response => {
                setBalance(response.balance)
                localStorage.setItem('balance', response.balance)

                return location.reload()
            })
    }

    async function registering({email, password, name, userGitHub, birthday}:SignInData) {
        if(!email || !password || !name || !userGitHub || !birthday)
            return alert('É obrigatório o preenchimento de todos os campos.');
        
        try {
            await axios(`http://localhost:3333/user/${email}/register`)
                .then(response => response.data)
                .then(response => response[0])
                .then(response => response.id)
            
            alert('Este email já está cadastrado')
        } catch (error) {
            await axios.post('http://localhost:3333/register', {
                email,
                password,
                name,
                userGitHub,
                birthday
            })

            alert('Registro executado com sucesso! Realize o login.')
            return location.reload()
        }
    }
    
    async function signIn({email, password}:SignInData) {
        try {
            await axios(`http://localhost:3333/user/${email}-${password}/login`)
                .then(response => response.data)
                .then(response => response[0])
                .then(response => {
                    setAuth(response.id)
                    
                    localStorage.setItem('balance', response.balance)
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
        setBalance(Number(localStorage.getItem('balance')))
    }, [auth, balance])

    return (
        <LoginContext.Provider value={{ signIn, registering, addBalance, updateProfile, auth, isAuthenticated, user, balance }}>
            {props.children}
        </LoginContext.Provider>
    )   
}