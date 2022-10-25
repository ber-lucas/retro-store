import { ShoppingBagOpen, ShoppingCart, Storefront, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import CartInput from "./CartInput";
import { LoginContext } from "../Context/LoginContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    price: number
}

const CartInfo = (props:Game) => {
    const [games, setGames] = useState<Game[]>([])
    const { user, auth } = useContext(LoginContext)
    const navigate = useNavigate()
    let soma = 0;

    useEffect(() => {
        axios(`http://localhost:3333/user/${auth}/cart`)
            .then(response => response.data)
            .then(response => response[0])
            .then(response => setGames(response.cart))
    }, [user])
    
    const cleanCart = async () => {
        await axios.post(`http://localhost:3333/user/${auth}/cart/clean`)
            .then(response => location.reload())
    }

    return (
        <div>
            <div className='pt-1 bg-nlw-gradient rounded-lg overflow-hidden'>
                <div className='bg-[#2A2632] px-8 py-6 flex justify-between items-center'>
                    
                    <div className="flex gap-3">
                        <strong className='text-3xl text-white font-black block'>Carrinho</strong>
                        <ShoppingCart weight="duotone" size={36} color={'white'} />
                    </div>
                    
                    <div className="flex flex-row gap-5">
                        <button onClick={() => navigate('/store')} className='font-semibold py-3 px-4 bg-red-500 text-white hover:bg-red-600 rounded flex items-center gap-3'>
                            <Storefront size={24}/>
                            Continuar Comprando
                        </button>
    
                        <button onClick={() => cleanCart()} className='font-semibold py-3 px-4 bg-zinc-500 text-white hover:bg-zinc-600 rounded flex items-center gap-3'>
                            <Trash size={24}/>
                            Limpar Carrinho
                        </button>
                    </div>
                </div>
            </div>
        
            {games.map(game => {
                soma += game.price

                return <CartInput key={game.id} title={game.title} bannerUrl={game.bannerUrl} price={game.price} id={game.id}/>
            })}

            <div>
                <header className="flex justify-between w-[80rem] h-[8rem] mt-8 py-6 px-12 bg-[#fdfeff0f]" style={{'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)', 'borderRadius': '8px'}}>
                    <div className="flex items-center justify-center gap-4">
                        <div className=" text-white text-center font-extrabold text-3xl">Total estimado:</div>
                        <div className="flex items-center justify-center bg-orange-500 rounded-md font-semibold w-24 h-12 hover:bg-orange-600 text-center">
                            <div className="flex">R$ {soma}</div>
                        </div>
                      
                        

                    </div>
                    <div className="flex items-center">
                        <button type="submit" className="text-white flex justify-center gap-2 py-3 px-4 bg-green-500 rounded-md font-semibold items-center hover:bg-green-600">
                            <ShoppingBagOpen weight="bold" size={24}/>
                            Comprar
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default CartInfo;
