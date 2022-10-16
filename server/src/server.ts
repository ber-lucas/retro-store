import express, { request, response } from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

app.get('/store', async (request, response)=>{
    const result  = await prisma.game.findMany({
        select: {
            title: true,
            price: true,
        }
    })
    return response.json(result)
});

app.get('/store/:id/balance', async (request, response)=>{
    const userId:any = request.params.id;

    const idUser = await prisma.user.findMany({
        select: {
            balance: true,
        },
        where: {
            id: userId,
        }
    })
    return response.json(idUser)
})

app.get('/store/:id/profile', async (request, response)=>{
    const userId = request.params.id;

    const idUserProfile = await prisma.user.findMany({
        select: {
            balance: true,
            email: true,
            name: true,
            birthday: true,
            ListGames: true,
        },
        where: {
            id: userId,
        }
    })
    return response.json(idUserProfile)
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