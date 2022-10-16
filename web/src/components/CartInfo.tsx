import { Minus } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CartInput from "./CartInput";

const CartInfo = () => {
    const navigate = useNavigate()

    return (
        <div>
            
            <body className="text-white text-center font-extrabold text-3xl">Carrinho</body>
        
            <CartInput imagePath="/game-1.png" name="League of Legends" />
            <CartInput imagePath="/game-2.png" name="Dota 2" />
            <CartInput imagePath="/game-3.png" name="CS: GO" />
        
            <div>
                <header className="flex justify-between w-[80rem] h-[8rem] mt-8 py-6 px-12 bg-[#fdfeff0f]" style={{'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)', 'borderRadius': '8px'}}>
                    <div className="flex items-center justify-center gap-4">
                        <div className=" text-white text-center font-extrabold text-3xl">Total estimado:</div>
                        <div className="flex items-center justify-center bg-orange-500 rounded-md font-semibold w-24 h-12 hover:bg-orange-700 text-center">
                            <div className="flex">R$ 35,95</div>
                        </div>
                      
                        

                    </div>
                    <div className="flex items-center">
                    <button type="submit" className="flex justify-center bg-green-500 rounded-md font-semibold items-center w-48 h-12 hover:bg-green-800">
                            <div className="flex">Adicionar ao carrinho</div>
                    </button>
                    </div>
                </header>
            </div>

            <div className="mt-8 flex justify-between">
            <div className="flex items-center">
                    <button onClick={() => navigate('/store')} type="submit" className="flex justify-center bg-violet-500 rounded-md font-semibold items-center w-48 h-12 hover:bg-violet-800 text-white">
                            <div className="flex">Continuar comprando</div>
                    </button>
                    </div>
                    <div className="flex items-center">
                    <button type="submit" className="flex justify-center bg-red-500 rounded-md font-semibold items-center w-60 h-12 hover:bg-red-700 text-white">
                            <Minus size={32} />
                            <div className="flex text-white">Remover todos os itens</div>
                    </button>
                    </div>
            </div>

        </div>
    )
}

export default CartInfo;
