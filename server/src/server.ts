import express, { request, response } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

//Lista de Games que aparencem na Landing Page e na Store
app.get('/games', async (request, response) => { 
    const games = await prisma.game.findMany()

    return response.json(games)
});

//Lista de Games que aparecem no Profile
app.get('/user/:id/games', async (request, response) => {
    const userId = request.params.id;
    
    const gamesProfile = await prisma.user.findMany({
        select: {
            games: true
        },
        where: {
            id: userId
        }
    })

    return response.json(gamesProfile)
})

//Lista de Games que aparecem no carrinho de cada usuário
app.get('/user/:id/cart', async (request, response) => {
    const userId = request.params.id;

    const gamesCart = await prisma.user.findMany({
        select: {
            cart: true
        },
        where: {
            id: userId
        }
    })

    return response.json(gamesCart)
})

//Lista de informações do usuário
app.get('/user/:id/data', async (request, response) => {
    const userId = request.params.id

    const userData = await prisma.user.findMany({
        include: {
            _count: {
                select: {
                    games: true
                }
            },
        },
        where: {
            id: userId
        }
    })

    return response.json(userData)
})

//Verificar existência de e-mail e senha para login
app.get('/user/:email-:password/login', async (request, response) => {
    const userEmail = request.params.email;
    const userPassword = request.params.password;

    const user = await prisma.user.findMany({
        include: {
            _count: {
                select: {
                    games: true
                }
            }
        },
        where: {
            email: {
                equals: userEmail
            },
            password: {
                equals: userPassword
            },
        }
    })

    return response.json(user)
})

//Verificar existência de e-mail para registro
app.get('/user/:email/register', async (request, response) => {
    const userEmail = request.params.email;

    const user = await prisma.user.findMany({
        include: {
            _count: {
                select: {
                    games: true
                }
            }
        },
        where: {
            email: {
                equals: userEmail
            }
        }
    })

    return response.json(user)
})

app.post('/register', async (request, response) => {
    const body = request.body

    const register = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name,
            userGitHub: body.userGitHub,
            birthday: body.birthday
        }
    })

    return response.status(201).json(register)
})

app.post('/user/:userid/games/:gameid/tocart', async (request, response) => {
    const userId = request.params.userid
    const gameId = request.params.gameid

    const gameToCart = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            cart: {
                connect: {
                    id: gameId
                }
            }
        }
    })

    return response.status(201).json(gameToCart)
})

app.post('/user/:id/cart/clean', async (request, response) => {
    const userId = request.params.id

    const cleanCart = await prisma.user.update({
        where: {
            id:userId
        },
        data: {
            cart: {
                set: []
            }
        }
    })

    return response.status(201).json(cleanCart)
})

app.post('/user/:userid/cart/:gameid/clean', async (request, response) => {
    const userId = request.params.userid
    const gameId = request.params.gameid

    const cleanGame = await prisma.game.update({
        where: {
            id: gameId
        },
        data: {
            cartUsers: {
                set: []
            }
        }
    })

    return response.status(201).json(cleanGame)
})

app.post('/user/:id/balance', async (request, response) => {
    const userId = request.params.id
    const body = request.body

    const addBalance = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            balance: {
                increment: body.balance
            }
        }
    })

    return response.status(201).json(addBalance)
})

/*app.post('/store/:id/cart', async (request, response)=>{
    const gameId = request.params.id;
    const body = request.body;

    

    const carts = await prisma.cart.create({
        data: {
            gameId,
            createdAt: body.createdAt,
            game: body.game,
        }
    })

    return response.json(body)
})*/

app.listen(3333)