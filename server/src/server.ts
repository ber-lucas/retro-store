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
            cart: {
                select: {
                    games: true
                }
            }
        },
        where: {
            id: userId
        }
    })

    return response.json(gamesCart)
})

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

//Verificar existência de e-mail e senha
app.get('/user/:email-:password/login', async (request, response) => {
    const userEmail = request.params.email;
    const userPassword = request.params.password;

    const user = await prisma.user.findMany({
        select: {
            id: true
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